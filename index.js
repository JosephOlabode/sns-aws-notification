// Set the parameters
var params = {
  Message: JSON.stringify({
    vehicleId: "MAX-IB-CH-405",
    vehicleType: "Motorcycle",
    vehiclePlateNumber: "MAX-AY-VO-0044",
    hpDays: "30-120 HP",
    helmetNumber: "8970303009",
    vehicleTrim: "Kickstart",
    lastUpdateTime: new Date().toISOString(),
    messageType: "create",
  }),
  TopicArn: "arn:aws:sns:eu-west-2:048464312507:Vehicle",
};

var AWS = require("aws-sdk");
AWS.config.loadFromPath("./config.json");

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS().publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise
  .then(function (data) {
    console.log("Data: ", data);
    console.log(
      `Message ${params.Message} sent to the topic ${params.TopicArn}`
    );
    console.log("MessageID is " + data.MessageId);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });

console.log("Hello, World!");
