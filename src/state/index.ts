import { Brand, Campaign, User } from '../models';

export interface IAppUser {
	user: any;
	profile?: User;
}

export interface GlobalState {
	campaigns: Campaign[];
	brands: Brand[];
}

export interface IAppState {
	userState: IAppUser;
	globalState: GlobalState;
}
