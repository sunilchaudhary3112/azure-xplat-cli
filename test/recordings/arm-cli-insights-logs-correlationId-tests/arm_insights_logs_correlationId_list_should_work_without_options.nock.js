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
  .reply(200, "{\"value\":[{\"caller\":\"Microsoft.Insights/autoscaleSettings\",\"correlationId\":\"2ad3397d-8120-4754-ad47-d2ca058330fc\",\"eventSource\":{\"value\":\"microsoft.insights/autoscalesettings\",\"localizedValue\":\"Microsoft Insights Autoscale Settings\"},\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1/events/42e22a30-b9bf-4b09-8f06-4333df7540b7/ticks/635648985995954256\",\"resourceGroupName\":\"Default-Web-BrazilSouth\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1\",\"operationName\":{\"value\":\"ScaleDown\",\"localizedValue\":\"Scale down\"},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":null},\"eventTimestamp\":\"2015-04-17T20:16:39.5954256Z\",\"subscriptionId\":\"b67f7fec-69fc-4974-9099-a26bd6ffeda3\"},{\"caller\":\"Microsoft.Insights/autoscaleSettings\",\"correlationId\":\"2ad3397d-8120-4754-ad47-d2ca058330fc\",\"eventSource\":{\"value\":\"microsoft.insights/autoscalesettings\",\"localizedValue\":\"Microsoft Insights Autoscale Settings\"},\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.insights/autoscalesettings/Default1-Default-Web-BrazilSouth/events/924594e1-00b5-4d89-9c63-71b92a5aa1d7/ticks/635648985995954256\",\"resourceGroupName\":\"Default-Web-BrazilSouth\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.insights/autoscalesettings/Default1-Default-Web-BrazilSouth\",\"operationName\":{\"value\":\"ScaleDown\",\"localizedValue\":\"Scale down\"},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":null},\"eventTimestamp\":\"2015-04-17T20:16:39.5954256Z\",\"subscriptionId\":\"b67f7fec-69fc-4974-9099-a26bd6ffeda3\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1869',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'WestUS_73a6a77e7f1f44b38cb58c297cd972b5_635649002682403148',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31945',
  'x-ms-correlation-request-id': 'd1c70c37-1361-4379-b1ae-37a9b4ec7e6e',
  'x-ms-routing-request-id': 'WESTUS:20150417T204428Z:d1c70c37-1361-4379-b1ae-37a9b4ec7e6e',
  date: 'Fri, 17 Apr 2015 20:44:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
.get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/providers/microsoft.insights/eventtypes/management/values?api-version=2014-04-01')
  .reply(200, "{\"value\":[{\"caller\":\"Microsoft.Insights/autoscaleSettings\",\"correlationId\":\"2ad3397d-8120-4754-ad47-d2ca058330fc\",\"eventSource\":{\"value\":\"microsoft.insights/autoscalesettings\",\"localizedValue\":\"Microsoft Insights Autoscale Settings\"},\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1/events/42e22a30-b9bf-4b09-8f06-4333df7540b7/ticks/635648985995954256\",\"resourceGroupName\":\"Default-Web-BrazilSouth\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1\",\"operationName\":{\"value\":\"ScaleDown\",\"localizedValue\":\"Scale down\"},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":null},\"eventTimestamp\":\"2015-04-17T20:16:39.5954256Z\",\"subscriptionId\":\"b67f7fec-69fc-4974-9099-a26bd6ffeda3\"},{\"caller\":\"Microsoft.Insights/autoscaleSettings\",\"correlationId\":\"2ad3397d-8120-4754-ad47-d2ca058330fc\",\"eventSource\":{\"value\":\"microsoft.insights/autoscalesettings\",\"localizedValue\":\"Microsoft Insights Autoscale Settings\"},\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.insights/autoscalesettings/Default1-Default-Web-BrazilSouth/events/924594e1-00b5-4d89-9c63-71b92a5aa1d7/ticks/635648985995954256\",\"resourceGroupName\":\"Default-Web-BrazilSouth\",\"resourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.insights/autoscalesettings/Default1-Default-Web-BrazilSouth\",\"operationName\":{\"value\":\"ScaleDown\",\"localizedValue\":\"Scale down\"},\"status\":{\"value\":\"Succeeded\",\"localizedValue\":\"Succeeded\"},\"subStatus\":{\"value\":null},\"eventTimestamp\":\"2015-04-17T20:16:39.5954256Z\",\"subscriptionId\":\"b67f7fec-69fc-4974-9099-a26bd6ffeda3\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1869',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'WestUS_73a6a77e7f1f44b38cb58c297cd972b5_635649002682403148',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31945',
  'x-ms-correlation-request-id': 'd1c70c37-1361-4379-b1ae-37a9b4ec7e6e',
  'x-ms-routing-request-id': 'WESTUS:20150417T204428Z:d1c70c37-1361-4379-b1ae-37a9b4ec7e6e',
  date: 'Fri, 17 Apr 2015 20:44:28 GMT',
  connection: 'close' });
 return result; }]];