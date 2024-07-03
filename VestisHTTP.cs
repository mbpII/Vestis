using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;

public static class VestisHTTP
{
    private static readonly string endpoint = Environment.GetEnvironmentVariable("COSMOS_DB_ENDPOINT");
    private static readonly string key = Environment.GetEnvironmentVariable("COSMOS_DB_KEY");
    private static readonly string databaseId = Environment.GetEnvironmentVariable("COSMOS_DB_DATABASE");
    private static readonly string containerId = Environment.GetEnvironmentVariable("COSMOS_DB_CONTAINER");

    [FunctionName("VestisHTTP")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        CosmosClient client = new CosmosClient(endpoint, key);
        Container container = client.GetContainer(databaseId, containerId);

        StoredProcedureExecuteResponse<string> response = await container.Scripts.ExecuteStoredProcedureAsync<string>("yourStoredProcId", new PartitionKey(""), null);

        return new OkObjectResult(response.Resource);
    }
}
