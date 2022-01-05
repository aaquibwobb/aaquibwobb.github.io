const AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB();

const listUsersByEmail = async ({userPoolId, email}) => {
  const params = {
    UserPoolId: userPoolId,
    Filter: `email = "${email}"`,
  };

  const cognitoIdp = new AWS.CognitoIdentityServiceProvider();
  return cognitoIdp.listUsers(params).promise();
};

const adminLinkUserAccounts = async ({
  username,
  userPoolId,
  providerName,
  providerUserId,
}) => {
  const params = {
    DestinationUser: {
      ProviderAttributeValue: username,
      ProviderName: 'Cognito',
    },
    SourceUser: {
      ProviderAttributeName: 'Cognito_Subject',
      ProviderAttributeValue: providerUserId,
      ProviderName: providerName,
    },
    UserPoolId: userPoolId,
  };

  const cognitoIdp = new AWS.CognitoIdentityServiceProvider();
  return new Promise((resolve, reject) => {
    cognitoIdp.adminLinkProviderForUser(params, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const adminCreateUser = async ({userPoolId, email, password}) => {
  const params = {
    UserPoolId: userPoolId,
    MessageAction: 'SUPPRESS',
    Username: email,
    TemporaryPassword: password,
    UserAttributes: [
      {
        Name: 'email',
        Value: email,
      },
      {
        Name: 'email_verified',
        Value: 'True',
      },
    ],
  };

  const cognitoIdp = new AWS.CognitoIdentityServiceProvider();
  return cognitoIdp.adminCreateUser(params).promise();
};

function generatePassword() {
  return `${Math.random() // Generate random number, eg: 0.123456
    .toString(36) // Convert  to base-36 : "0.4fzyo82mvyr"
    .slice(-8)}42`; // Cut off last 8 characters : "yo82mvyr" and add a number, because the cognito password policy requires a number
}

exports.handler = async (event, _context, callback) => {
  try {
    const {
      triggerSource,
      userPoolId,
      userName,
      request: {
        userAttributes: {email, name},
      },
    } = event;
    let isUserAlreadyExisting; //boolean to check if user is already there
    let sub; //user id referred by cognito
    console.log(event.request);

    const EXTERNAL_AUTHENTICATION_PROVIDER = 'PreSignUp_ExternalProvider';

    if (triggerSource === EXTERNAL_AUTHENTICATION_PROVIDER) {
      const usersFilteredByEmail = await listUsersByEmail({
        userPoolId,
        email,
      });

      const [providerNameValue, providerUserId] = userName.split('_');
      const providerName =
        providerNameValue.charAt(0).toUpperCase() + providerNameValue.slice(1);
      const password = generatePassword();
      if (usersFilteredByEmail.Users && usersFilteredByEmail.Users.length > 0) {
        const cognitoUsername =
          usersFilteredByEmail.Users[0].Username || 'username-not-found';

        await adminLinkUserAccounts({
          username: cognitoUsername,
          userPoolId,
          providerName,
          providerUserId,
        });
        isUserAlreadyExisting = true;
      } else {
        const createdCognitoUser = await adminCreateUser({
          userPoolId,
          email,
          password,
        });

        const cognitoNativeUsername =
          createdCognitoUser.User?.Username || 'username-not-found';
        sub = createdCognitoUser.User?.Username;
        await adminLinkUserAccounts({
          username: cognitoNativeUsername,
          userPoolId,
          providerName,
          providerUserId,
        });
        event.response.autoVerifyEmail = true;
        event.response.autoConfirmUser = true;
        isUserAlreadyExisting = false;
      }
      let date = new Date();
      let cognitoHackTableParams = {
        Item: {
          id: {S: event.userName},
          __typename: {S: 'OauthCognitoUserLink'},
          userName: {S: event.userName},
          email: {S: email},
          isUserAlreadyExisting: {BOOL: isUserAlreadyExisting},
          name: {S: name},
          password: {S: password},
          createdAt: {S: date.toISOString()},
          updatedAt: {S: date.toISOString()},
        },
        TableName: process.env.OAUTHTABLE,
      };
      let userTableParams = {
        Item: {
          id: {S: sub},
          __typename: {S: 'User'},
          uid: {S: sub},
          name: {S: name},
          role: {S: 'INFLUENCER'},
          createdAt: {S: date.toISOString()},
          updatedAt: {S: date.toISOString()},
        },
        TableName: process.env.USERTABLE,
      };
      try {
        await ddb.putItem(cognitoHackTableParams).promise();
        if (!isUserAlreadyExisting)
          await ddb.putItem(userTableParams).promise();
        console.log('Success');
      } catch (err) {
        console.log('Error', err);
      }
    }
    return callback(null, event);
  } catch (err) {
    return callback(err, event);
  }
};
