import { CognitoUser } from 'amazon-cognito-identity-js';
import { Brand, Campaign, User } from '../../models';

interface ISetActiveUser {
	type: 'set_active_user';
	user: CognitoUser;
}

interface IUnsetActiveUser {
	type: 'unset_active_user';
}

interface ISetUserProfile {
	type: 'set_user_profile';
	profile: User;
}

export type IUserActions = ISetActiveUser | IUnsetActiveUser | ISetUserProfile;
