var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  if (
    event.request.userAttributes['cognito:user_status'] ===
    process.env.EXTERNAL_PROVIDER
  ) {
    return;
  }
  console.log(event.request);
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: {S: event.request.userAttributes.sub},
        __typename: {S: 'User'},
        uid: {S: event.userName},
        name: {S: event.request.userAttributes.name},
        role: {S: event.request.userAttributes['custom:userRole']},
        createdAt: {S: date.toISOString()},
        updatedAt: {S: date.toISOString()},
      },
      TableName: process.env.USERTABLE,
    };
    try {
      await ddb.putItem(params).promise();
      console.log('Success');
    } catch (err) {
      console.log('Error', err);
    }

    console.log('Success: User Created in DB');
  } else {
    console.log('Error in User Creation');
  }
};
