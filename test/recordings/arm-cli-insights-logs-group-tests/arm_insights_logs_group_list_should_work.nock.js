// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
.get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/providers/microsoft.insights/eventtypes/management/values?api-version=2014-04-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'WestUS_92fadc3bcd53400fa2d7f20be34bbb06_635649001040272001',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31909',
  'x-ms-correlation-request-id': '0329b5de-b4f0-4fa1-8842-dc0eeb0a4d17',
  'x-ms-routing-request-id': 'WESTUS:20150417T204143Z:0329b5de-b4f0-4fa1-8842-dc0eeb0a4d17',
  date: 'Fri, 17 Apr 2015 20:41:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
.get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/providers/microsoft.insights/eventtypes/management/values?api-version=2014-04-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'WestUS_92fadc3bcd53400fa2d7f20be34bbb06_635649001040272001',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31909',
  'x-ms-correlation-request-id': '0329b5de-b4f0-4fa1-8842-dc0eeb0a4d17',
  'x-ms-routing-request-id': 'WESTUS:20150417T204143Z:0329b5de-b4f0-4fa1-8842-dc0eeb0a4d17',
  date: 'Fri, 17 Apr 2015 20:41:43 GMT',
  connection: 'close' });
 return result; }]];