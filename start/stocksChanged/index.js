module.exports = async function (context, documents) {


    const updates = documents.map(stock => ({
        target: 'updated',
        arguments: [stock]
    }));

    context.bindings.signalRMessages = updates;
    context.done();

    if (!!documents && documents.length > 0) {
        context.log('Document Id: ', documents[0].id);
    }
}

//signal R output binding
//This binding allows the function to broadcast changes to clients.

// {
//     "type": "signalR",
//     "name": "signalRMessages",
//     "connectionString": "AzureSignalRConnectionString",
//     "hubName": "stocks",
//     "direction": "out"
//   }