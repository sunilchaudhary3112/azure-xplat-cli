// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/operationresults/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '4ff71a18-50a1-4ecc-8a4e-9fee9a006494',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '59a5d5b3-78f4-4f55-b5fb-b8ee035a4545',
  'x-ms-routing-request-id': 'WESTUS:20160426T205447Z:59a5d5b3-78f4-4f55-b5fb-b8ee035a4545',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:54:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/operationresults/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '4ff71a18-50a1-4ecc-8a4e-9fee9a006494',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '59a5d5b3-78f4-4f55-b5fb-b8ee035a4545',
  'x-ms-routing-request-id': 'WESTUS:20160426T205447Z:59a5d5b3-78f4-4f55-b5fb-b8ee035a4545',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:54:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '42293ad2-9fb3-4416-9e5c-95431e644c11',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': '738c84ef-d83b-43b8-8f47-ddb63ec0134a',
  'x-ms-routing-request-id': 'WESTUS:20160426T205548Z:738c84ef-d83b-43b8-8f47-ddb63ec0134a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:55:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '42293ad2-9fb3-4416-9e5c-95431e644c11',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': '738c84ef-d83b-43b8-8f47-ddb63ec0134a',
  'x-ms-routing-request-id': 'WESTUS:20160426T205548Z:738c84ef-d83b-43b8-8f47-ddb63ec0134a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:55:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5fab4812-3080-4889-91b5-9f9ecdb681be',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14892',
  'x-ms-correlation-request-id': '4d6f27fc-a407-4f71-9315-89ddafc700e6',
  'x-ms-routing-request-id': 'WESTUS:20160426T205648Z:4d6f27fc-a407-4f71-9315-89ddafc700e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:56:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5fab4812-3080-4889-91b5-9f9ecdb681be',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14892',
  'x-ms-correlation-request-id': '4d6f27fc-a407-4f71-9315-89ddafc700e6',
  'x-ms-routing-request-id': 'WESTUS:20160426T205648Z:4d6f27fc-a407-4f71-9315-89ddafc700e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:56:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e83d6fb7-c07d-4f90-92ac-deb6e8b76ab7',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': 'a1d262a0-c3c9-42e4-81cb-360614cef517',
  'x-ms-routing-request-id': 'WESTUS:20160426T205749Z:a1d262a0-c3c9-42e4-81cb-360614cef517',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:57:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e83d6fb7-c07d-4f90-92ac-deb6e8b76ab7',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': 'a1d262a0-c3c9-42e4-81cb-360614cef517',
  'x-ms-routing-request-id': 'WESTUS:20160426T205749Z:a1d262a0-c3c9-42e4-81cb-360614cef517',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:57:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85a49098-c58c-4a36-af80-fe683e590405',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14893',
  'x-ms-correlation-request-id': 'f2401c0c-9eff-4fca-9453-5ec475fb05b0',
  'x-ms-routing-request-id': 'WESTUS:20160426T205850Z:f2401c0c-9eff-4fca-9453-5ec475fb05b0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:58:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85a49098-c58c-4a36-af80-fe683e590405',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14893',
  'x-ms-correlation-request-id': 'f2401c0c-9eff-4fca-9453-5ec475fb05b0',
  'x-ms-routing-request-id': 'WESTUS:20160426T205850Z:f2401c0c-9eff-4fca-9453-5ec475fb05b0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:58:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '45f0c362-3525-4849-bcea-9c25b8cc3c1b',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '5c6832c7-3dd3-447f-a9a1-a86e83201178',
  'x-ms-routing-request-id': 'CENTRALUS:20160426T205951Z:5c6832c7-3dd3-447f-a9a1-a86e83201178',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:59:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617/configurations/gateway/azureasyncoperations/cf2d27e1-c65c-4632-9658-6982e5cc8899-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '45f0c362-3525-4849-bcea-9c25b8cc3c1b',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '5c6832c7-3dd3-447f-a9a1-a86e83201178',
  'x-ms-routing-request-id': 'CENTRALUS:20160426T205951Z:5c6832c7-3dd3-447f-a9a1-a86e83201178',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:59:50 GMT',
  connection: 'close' });
 return result; }]];