var aws=require("aws-sdk");
aws.config.update({
    accessKeyId:"AKIA5V2X2I7HZ72434NZ",
    secretAccessKey:"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",
    region:"us-east-1"
})
var client=new aws.DynamoDB();
const docClient=new aws.DynamoDB.DocumentClient();
var tablename="sample";

var params = {
    TableName : tablename,
    KeySchema:[
        {
            'AttributeName': 'customer_id',
            'KeyType': 'HASH'
        },
        {
            'AttributeName': 'key_id',
            'KeyType': 'RANGE'
        }
    ],
    AttributeDefinitions:[
        {
            'AttributeName': 'customer_id',
            'AttributeType': 'N'
        },
        {
            'AttributeName': 'key_id',
            'AttributeType': 'N'
        },
    ],
    ProvisionedThroughput:{
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
    }
};

client.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
