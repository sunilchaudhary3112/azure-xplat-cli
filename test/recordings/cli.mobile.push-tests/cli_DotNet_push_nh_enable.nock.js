// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet4789/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'ba8e90041e84bfc3a61cd5aa7ab2ee05',
  date: 'Mon, 29 Jun 2015 22:14:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet4789/pushentity', '*')
  .reply(202, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '1ddec4ae5834baacbd09a3af856b12dc',
  date: 'Mon, 29 Jun 2015 22:14:36 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet4789/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '84d7ab3441aaba60b115cf23fb88f7dc',
  date: 'Mon, 29 Jun 2015 22:14:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet4789/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'bd6484379046b44fb4fcba38e39e3300',
  date: 'Mon, 29 Jun 2015 22:14:44 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet4789/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'a44da998fbb1b2c0a634f805fc33ae81',
  date: 'Mon, 29 Jun 2015 22:14:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet4789/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\",\"pushEntityNamespace\":\"clitestDotNet4789Hub-ns\",\"pushEntityPath\":\"clitestDotNet4789Hub\",\"pushEntityConnectionString\":\"Endpoint=sb:\\/\\/clitestdotnet4789hub-ns.servicebus.windows.net\\/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=\\/JiVQL4bRloEtiWAKosxRPH\\/vctFi6nIJOtd6jyCiGM=\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '414',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'b6bca1c1a81ab9218b500aeec3451911',
  date: 'Mon, 29 Jun 2015 22:14:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet4789/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"healthy\",\"pushEntityNamespace\":\"clitestDotNet4789Hub-ns\",\"pushEntityPath\":\"clitestDotNet4789Hub\",\"pushEntityConnectionString\":\"Endpoint=sb:\\/\\/clitestdotnet4789hub-ns.servicebus.windows.net\\/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=\\/JiVQL4bRloEtiWAKosxRPH\\/vctFi6nIJOtd6jyCiGM=\",\"namespaceCreated\":true,\"pushEntityCreated\":true}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '0981acc2b939bc1aa1e4e42538499275',
  date: 'Mon, 29 Jun 2015 22:15:01 GMT' });
 return result; }]];