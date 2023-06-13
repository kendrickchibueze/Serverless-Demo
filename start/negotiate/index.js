module.exports = async function (context, req, connectionInfo) {
    context.log('JavaScript HTTP trigger function processed a request.');
    // As the function is called, the SignalR connection is returned as the response to the function.
    // Now that the function to return the SignalR connection info is implemented, you can create a function responsible for pushing changes to the client.
    context.res.body =connectionInfo

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

}


// This configuration in functions.json allows the function to return the connection information to the server, which is used to identify connected clients.
// {
//     "type": "signalRConnectionInfo",
//     "name": "connectionInfo",
//     "hubName": "stocks",
//     "direction": "in",
//     "connectionStringSetting": "AzureSignalRConnectionString"
// }