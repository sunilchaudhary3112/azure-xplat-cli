/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var fs = require('fs');
var azure = require('azure');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

/**
* Validate that a given location is valid for group creation
* and prompts for location if not valid or not given.
*
* @param {string} location location requested
* @param {object} log object to print messages to user
* @param {object} interaction the interactor object to prompt with
* @param {function} callback callback received either error or final location
*/
exports.validateLocation = function validateLocation(location, log, interaction, callback) {
  // TODO: We currently don't have a way to query the server for
  // valid group locations, so hard coded to what the test cluster
  // allows.

  var validLocations = ['South Central US', 'West Europe'];

  if (location && validLocations.some(function (l) { return utils.ignoreCaseEquals(l, location); })) {
    return callback(null, location);
  }

  if (location) {
    log.info(util.format($('The location %s is not valid'), location));
  }

  log.info($('Choose location: '));
  interaction.choose(validLocations, function (err, locationIndex) {
    callback(err, validLocations[locationIndex]);
  });
};

exports.groupExists = function groupExists(client, name, callback) {
  client.resourceGroups.get(name, function (err) {
    if (err) {
      // 404 means doesn't exist
      if (err.statusCode === 404) {
        callback(null, false);
      } else {
      // some other error, let it out
        callback(err);
      }
    } else {
      // No error, group exists
      callback(null, true);
    }
  });
};

var deploymentTemplateStorageContainerName = 'deployment-templates';

exports.createDeployment = function (cli, resourceGroup, mode, name, options, _) {
  if (options.galleryTemplate && options.fileTemplate) {
    throw new Error($('Either --gallery-template or --file-template need to be specified. Not both.'));
  } else if(!options.galleryTemplate && !options.fileTemplate) {
    throw new Error($('Either --gallery-template or --file-template need to be specified.'));
  }

  if (options.parameters && options.parametersFile) {
    throw new Error($('Either --parameters or --parameters-file need to be specified. Not both.'));
  }

  if (!name) {
    // if the user doesn't specify a deployment name, use the current time, like "20131223140835"
    name = new Date().toISOString().split('.')[0]
      .replace(/-/g, '')
      .replace(/T/g, '')
      .replace(/:/g, '');
  }

  var subscription = profile.current.getSubscription(options.subscription);

  var client = subscription.createResourceClient('createResourceManagementClient');

  var deploymentParameters;
  if (options.parametersFile) {
    var jsonFile = fs.readFileSync(options.parametersFile, 'utf8');
    deploymentParameters = JSON.parse(utils.stripBOM(jsonFile));
    if (!deploymentParameters.properties || !deploymentParameters.properties.parameters) {
      throw new Error($('Incorrectly formated parameters file.'));
    }

    deploymentParameters = deploymentParameters.properties.parameters;
  } else if (options.parameters) {
    deploymentParameters = JSON.parse(options.parameters);
  }

  var templateUri;

  cli.interaction.withProgress($('Creating a deployment'),
    function (log, _) {

    templateUri = exports.getTemplateUri(subscription,
      options.fileTemplate,
      options.galleryTemplate,
      options.storageAccount, _);

    var templateParameters = {
      mode: 'Incremental',
      templateLink: {
        uri: templateUri
      }
    };

    if (deploymentParameters) {
      templateParameters.parameters = deploymentParameters;

      if (options.parametersHash) {
        templateParameters.parameters.contentHash = {
          value: options.parametersHash
        };

        if (options.parametersHashAlgorithm) {
          templateParameters.parameters.contentHash.algorithm = options.parametersHashAlgorithm;
        }
      }

      if (options.parametersVersion) {
        templateParameters.parameters.contentVersion = options.parametersVersion;
      }
    }

    if (mode) {
      templateParameters.mode = mode;
    }

    if (options.templateHash) {
      templateParameters.templateLink = {
        contentHash: {
          value: options.templateHash
        }
      };

      if (options.templateHashAlgorithm) {
        templateParameters.templateLink.contentHash.algorithm = options.templateHashAlgorithm;
      }
    }

    if (options.templateVersion) {
      if (!options.templateVersion) {
        templateParameters = {};
      }

      templateParameters.templateLink.contentVersion = options.templateVersion;
    }

    client.deployments.createOrUpdate(resourceGroup, name, templateParameters, _);
  }, _);

  cli.output.info($('Created template deployment %s using template %s'), name, templateUri);
};

exports.getTemplateUri = function (subscription, templateFile, galleryTemplateName, storageAccountName, _) {
  var templateFileUri;

  if (templateFile) {
    if (validation.isURL(templateFile)) {
      templateFileUri = templateFile;
    } else {
      var storageClient = utils._createStorageClient(subscription);
      var keys = storageClient.storageAccounts.getKeys(storageAccountName, _);
      var storageAccount = storageClient.storageAccounts.get(storageAccountName, _).storageAccount;

      var blobService = azure.createBlobService(storageAccountName, keys.primaryKey, storageAccount.properties.endpoints[0]);

      try {
        blobService.createContainer(deploymentTemplateStorageContainerName, {
          publicAccessLevel: azure.Constants.BlobConstants.BlobContainerPublicAccessType.BLOB
        }, _);
      } catch (e) {
        if (e.statusCode !== 409) {
          // Don't throw if container already exists
          throw e;
        }
      }

      var blobName = process.env.CSM_TEST_BLOB_NAME || new Date().toISOString().split('.')[0]
            .replace(/-/g, '')
            .replace(/_/g, '')
            .replace(/:/g, '');

      blobService
          .createBlockBlobFromFile(deploymentTemplateStorageContainerName,
            blobName, templateFile,_);

      templateFileUri = blobService.getBlobUrl(deploymentTemplateStorageContainerName, blobName, {
        AccessPolicy: {
          Permissions: azure.Constants.BlobConstants.SharedAccessPermissions.READ,
          Expiry: azure.date.hoursFromNow(24)
        }
      });
    }
  } else if (galleryTemplateName) {
    templateFileUri = exports.getGalleryTemplateFile(subscription, galleryTemplateName, _);
  }

  return templateFileUri;
};

exports.getGalleryTemplateFile = function (subscription, galleryTemplateName, _) {
  var galleryClient = subscription.createResourceClient('createGalleryClient');
  var galleryItem = galleryClient.items.get(galleryTemplateName, _).item;
  return galleryItem.definitionTemplates.deploymentTemplateFileUrls[0];
};