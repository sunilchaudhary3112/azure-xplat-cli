// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4fbe2810-8ec4-4443-88f4-1d0a6a212d02',
    name: 'Pay-As-You-Go',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'dab60df3-eb31-470e-9aa7-0bb580c2624c',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_VAULT'] = 'XplatTestVaultMSTest';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/keys/xplatTestVaultKey8599/create?api-version=2015-06-01', '*')
  .reply(200, "{\"key\":{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599/561d35c213c646a48dbf77b46f5fcbe3\",\"kty\":\"RSA\",\"key_ops\":[\"encrypt\",\"decrypt\",\"sign\",\"verify\",\"wrapKey\",\"unwrapKey\"],\"n\":\"sBU7kmsZ8aj-eFR7xj-BTJu7XvA8zW9nmg3wbtgfelwwoMG1cWVRMV4N4P1MwCGv3gEUVPFuf0DJYwGz9JHISBUyRGg4Ra23P4Yqe_PbrCQh0u9tgISyYDxbUbcmWxeXTs8XhmZmNVMz15omAD89p5NJVuR282W1ShMEd5A3EDVxiInbZup6KsMgFA9qucOjaroSYecxO9kAge1AtdIRdFeqQWfkMBgDP_T9u2MIxRZqfykoRZy-I_4d8PoyYHe_d-wJLFYTztTW-m6okxmXlSirKuY9Gl8WjtsGPP4im4iTULMWcUOz3mlL-w9fn7sH7lxRTp-7bvI8pEBC1gGFdw\",\"e\":\"AQAB\"},\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e72d701c-62f2-496f-a4a2-92e85efe615a',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:02 GMT',
  connection: 'close',
  'content-length': '636' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/keys/xplatTestVaultKey8599/create?api-version=2015-06-01', '*')
  .reply(200, "{\"key\":{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599/561d35c213c646a48dbf77b46f5fcbe3\",\"kty\":\"RSA\",\"key_ops\":[\"encrypt\",\"decrypt\",\"sign\",\"verify\",\"wrapKey\",\"unwrapKey\"],\"n\":\"sBU7kmsZ8aj-eFR7xj-BTJu7XvA8zW9nmg3wbtgfelwwoMG1cWVRMV4N4P1MwCGv3gEUVPFuf0DJYwGz9JHISBUyRGg4Ra23P4Yqe_PbrCQh0u9tgISyYDxbUbcmWxeXTs8XhmZmNVMz15omAD89p5NJVuR282W1ShMEd5A3EDVxiInbZup6KsMgFA9qucOjaroSYecxO9kAge1AtdIRdFeqQWfkMBgDP_T9u2MIxRZqfykoRZy-I_4d8PoyYHe_d-wJLFYTztTW-m6okxmXlSirKuY9Gl8WjtsGPP4im4iTULMWcUOz3mlL-w9fn7sH7lxRTp-7bvI8pEBC1gGFdw\",\"e\":\"AQAB\"},\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e72d701c-62f2-496f-a4a2-92e85efe615a',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:02 GMT',
  connection: 'close',
  'content-length': '636' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .get('/keys/xplatTestVaultKey8599/?api-version=2015-06-01')
  .reply(200, "{\"key\":{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599/561d35c213c646a48dbf77b46f5fcbe3\",\"kty\":\"RSA\",\"key_ops\":[\"encrypt\",\"decrypt\",\"sign\",\"verify\",\"wrapKey\",\"unwrapKey\"],\"n\":\"sBU7kmsZ8aj-eFR7xj-BTJu7XvA8zW9nmg3wbtgfelwwoMG1cWVRMV4N4P1MwCGv3gEUVPFuf0DJYwGz9JHISBUyRGg4Ra23P4Yqe_PbrCQh0u9tgISyYDxbUbcmWxeXTs8XhmZmNVMz15omAD89p5NJVuR282W1ShMEd5A3EDVxiInbZup6KsMgFA9qucOjaroSYecxO9kAge1AtdIRdFeqQWfkMBgDP_T9u2MIxRZqfykoRZy-I_4d8PoyYHe_d-wJLFYTztTW-m6okxmXlSirKuY9Gl8WjtsGPP4im4iTULMWcUOz3mlL-w9fn7sH7lxRTp-7bvI8pEBC1gGFdw\",\"e\":\"AQAB\"},\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '72e2ad0b-d8a7-4509-b451-18f868bcef97',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:05 GMT',
  connection: 'close',
  'content-length': '636' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .get('/keys/xplatTestVaultKey8599/?api-version=2015-06-01')
  .reply(200, "{\"key\":{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599/561d35c213c646a48dbf77b46f5fcbe3\",\"kty\":\"RSA\",\"key_ops\":[\"encrypt\",\"decrypt\",\"sign\",\"verify\",\"wrapKey\",\"unwrapKey\"],\"n\":\"sBU7kmsZ8aj-eFR7xj-BTJu7XvA8zW9nmg3wbtgfelwwoMG1cWVRMV4N4P1MwCGv3gEUVPFuf0DJYwGz9JHISBUyRGg4Ra23P4Yqe_PbrCQh0u9tgISyYDxbUbcmWxeXTs8XhmZmNVMz15omAD89p5NJVuR282W1ShMEd5A3EDVxiInbZup6KsMgFA9qucOjaroSYecxO9kAge1AtdIRdFeqQWfkMBgDP_T9u2MIxRZqfykoRZy-I_4d8PoyYHe_d-wJLFYTztTW-m6okxmXlSirKuY9Gl8WjtsGPP4im4iTULMWcUOz3mlL-w9fn7sH7lxRTp-7bvI8pEBC1gGFdw\",\"e\":\"AQAB\"},\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '72e2ad0b-d8a7-4509-b451-18f868bcef97',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:05 GMT',
  connection: 'close',
  'content-length': '636' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .get('/keys/?api-version=2015-06-01')
  .reply(200, "{\"value\":[{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599\",\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '83c13ce2-80f3-4eaa-a7f0-02ea092ef5b0',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:05 GMT',
  connection: 'close',
  'content-length': '181' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .get('/keys/?api-version=2015-06-01')
  .reply(200, "{\"value\":[{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599\",\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '83c13ce2-80f3-4eaa-a7f0-02ea092ef5b0',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:05 GMT',
  connection: 'close',
  'content-length': '181' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .get('/keys/xplatTestVaultKey8599/versions?api-version=2015-06-01')
  .reply(200, "{\"value\":[{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599/561d35c213c646a48dbf77b46f5fcbe3\",\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e26138de-99ea-4dd1-9324-d22303bc4f7c',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:06 GMT',
  connection: 'close',
  'content-length': '214' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .get('/keys/xplatTestVaultKey8599/versions?api-version=2015-06-01')
  .reply(200, "{\"value\":[{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599/561d35c213c646a48dbf77b46f5fcbe3\",\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e26138de-99ea-4dd1-9324-d22303bc4f7c',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:06 GMT',
  connection: 'close',
  'content-length': '214' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .delete('/keys/xplatTestVaultKey8599/delete?api-version=2015-06-01')
  .reply(200, "{\"key\":{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599/561d35c213c646a48dbf77b46f5fcbe3\",\"kty\":\"RSA\",\"key_ops\":[\"encrypt\",\"decrypt\",\"sign\",\"verify\",\"wrapKey\",\"unwrapKey\"],\"n\":\"sBU7kmsZ8aj-eFR7xj-BTJu7XvA8zW9nmg3wbtgfelwwoMG1cWVRMV4N4P1MwCGv3gEUVPFuf0DJYwGz9JHISBUyRGg4Ra23P4Yqe_PbrCQh0u9tgISyYDxbUbcmWxeXTs8XhmZmNVMz15omAD89p5NJVuR282W1ShMEd5A3EDVxiInbZup6KsMgFA9qucOjaroSYecxO9kAge1AtdIRdFeqQWfkMBgDP_T9u2MIxRZqfykoRZy-I_4d8PoyYHe_d-wJLFYTztTW-m6okxmXlSirKuY9Gl8WjtsGPP4im4iTULMWcUOz3mlL-w9fn7sH7lxRTp-7bvI8pEBC1gGFdw\",\"e\":\"AQAB\"},\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '0114bd38-928d-43f0-a98a-e44092af7c8b',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:07 GMT',
  connection: 'close',
  'content-length': '636' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .delete('/keys/xplatTestVaultKey8599/delete?api-version=2015-06-01')
  .reply(200, "{\"key\":{\"kid\":\"https://xplattestvaultmstest.vault.azure.net/keys/xplatTestVaultKey8599/561d35c213c646a48dbf77b46f5fcbe3\",\"kty\":\"RSA\",\"key_ops\":[\"encrypt\",\"decrypt\",\"sign\",\"verify\",\"wrapKey\",\"unwrapKey\"],\"n\":\"sBU7kmsZ8aj-eFR7xj-BTJu7XvA8zW9nmg3wbtgfelwwoMG1cWVRMV4N4P1MwCGv3gEUVPFuf0DJYwGz9JHISBUyRGg4Ra23P4Yqe_PbrCQh0u9tgISyYDxbUbcmWxeXTs8XhmZmNVMz15omAD89p5NJVuR282W1ShMEd5A3EDVxiInbZup6KsMgFA9qucOjaroSYecxO9kAge1AtdIRdFeqQWfkMBgDP_T9u2MIxRZqfykoRZy-I_4d8PoyYHe_d-wJLFYTztTW-m6okxmXlSirKuY9Gl8WjtsGPP4im4iTULMWcUOz3mlL-w9fn7sH7lxRTp-7bvI8pEBC1gGFdw\",\"e\":\"AQAB\"},\"attributes\":{\"enabled\":true,\"created\":1445976723,\"updated\":1445976723}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '0114bd38-928d-43f0-a98a-e44092af7c8b',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:07 GMT',
  connection: 'close',
  'content-length': '636' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestvaultmstest.vault.azure.net:443')
  .get('/keys/xplatTestVaultKey8599/?api-version=2015-06-01')
  .reply(404, "{\"error\":{\"code\":\"KeyNotFound\",\"message\":\"Key xplatTestVaultKey8599 not found\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '80',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7d274116-2e32-4f8c-894d-4d7a91cb8840',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestvaultmstest.vault.azure.net:443')
  .get('/keys/xplatTestVaultKey8599/?api-version=2015-06-01')
  .reply(404, "{\"error\":{\"code\":\"KeyNotFound\",\"message\":\"Key xplatTestVaultKey8599 not found\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '80',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7d274116-2e32-4f8c-894d-4d7a91cb8840',
  'x-ms-keyvault-service-version': '1.0.0.127',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Tue, 27 Oct 2015 20:12:08 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestVaultKey8599'];};