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
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617\",\"name\":\"xplatTestHDInsightClusterCreate1617\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"2bd9d09d-a272-4296-90f5-879bbc473572\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.7.889\",\"osType\":\"Windows\",\"clusterDefinition\":{\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"HeadNode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-26T20:25:00.603\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate1617.azurehdinsight.net\",\"port\":443},{\"name\":\"RDP\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate1617.azurehdinsight.net\",\"port\":3389}],\"tier\":\"standard\"}},{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7796\",\"name\":\"xplatTestHDInsightClusterCreate7796\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"630ae818-e13a-48bb-bb41-d716f94748dc\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.2.1000.0.7339916.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-26T20:05:32.183\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7796-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7796.azurehdinsight.net\",\"port\":443}],\"tier\":\"standard\"}},{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate8197Premium\",\"name\":\"xplatTestHDInsightClusterCreate8197Premium\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"88ae68ab-464f-4302-9243-3fb7e0635230\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.4.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.4.1000.0.7338911.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-26T19:47:24.023\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate8197Premium-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate8197Premium.azurehdinsight.net\",\"port\":443}],\"tier\":\"premium\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3880',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc7a92f8-b5b3-4186-b51a-1ebfde6fa733',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '759d39b6-07c7-4128-a04e-4b92ca885e3d',
  'x-ms-routing-request-id': 'WESTUS:20160426T204835Z:759d39b6-07c7-4128-a04e-4b92ca885e3d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:48:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate1617\",\"name\":\"xplatTestHDInsightClusterCreate1617\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"2bd9d09d-a272-4296-90f5-879bbc473572\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.7.889\",\"osType\":\"Windows\",\"clusterDefinition\":{\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"HeadNode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-26T20:25:00.603\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate1617.azurehdinsight.net\",\"port\":443},{\"name\":\"RDP\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate1617.azurehdinsight.net\",\"port\":3389}],\"tier\":\"standard\"}},{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7796\",\"name\":\"xplatTestHDInsightClusterCreate7796\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"630ae818-e13a-48bb-bb41-d716f94748dc\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.2.1000.0.7339916.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-26T20:05:32.183\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7796-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7796.azurehdinsight.net\",\"port\":443}],\"tier\":\"standard\"}},{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate8197Premium\",\"name\":\"xplatTestHDInsightClusterCreate8197Premium\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"88ae68ab-464f-4302-9243-3fb7e0635230\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.4.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.4.1000.0.7338911.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-26T19:47:24.023\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate8197Premium-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate8197Premium.azurehdinsight.net\",\"port\":443}],\"tier\":\"premium\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3880',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc7a92f8-b5b3-4186-b51a-1ebfde6fa733',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14914',
  'x-ms-correlation-request-id': '759d39b6-07c7-4128-a04e-4b92ca885e3d',
  'x-ms-routing-request-id': 'WESTUS:20160426T204835Z:759d39b6-07c7-4128-a04e-4b92ca885e3d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 26 Apr 2016 20:48:35 GMT',
  connection: 'close' });
 return result; }]];