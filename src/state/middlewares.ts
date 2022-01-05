import { API, Auth } from 'aws-amplify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IAppState } from '.';
import {
	setBrands,
	setCampaigns,
	setCurrentUser,
	setUserProfile,
} from './action-creators';
import { cognitoUserAttributesToObject } from './utils';
import * as queries from '../graphql/queries';

export function initializeState(): ThunkAction<
	Promise<any>,
	IAppState,
	{},
	AnyAction
> {
	return async (dispatch, getState) => {
		return new Promise(async (res, rej) => {
			try {
				//TODO: Add all fetches
				await dispatch(fetchCognitoUser());
				await dispatch(fetchUserProfile());
				// await dispatch(fetchUserBrands());
				// await dispatch(fetchUserCampaigns());
				res(true);
			} catch (error) {
				console.log(error);
				res(false);
			}
		});
	};
}

export function fetchCognitoUser(): ThunkAction<
	Promise<any>,
	IAppState,
	{},
	AnyAction
> {
	return async (dispatch, getState) => {
		return new Promise(async (res, rej) => {
			try {
				const user = await Auth.currentAuthenticatedUser();
				let attributes = await Auth.userAttributes(user);
				let obj = cognitoUserAttributesToObject(attributes);
				dispatch(setCurrentUser(obj));
				res(true);
			} catch (error) {
				res(false);
			}
		});
	};
}

export function fetchUserProfile(): ThunkAction<
	Promise<any>,
	IAppState,
	{},
	AnyAction
> {
	return async (dispatch, getState) => {
		return new Promise(async (res, rej) => {
			try {
				const cognitoUser = await Auth.currentUserInfo();
				const userData: any = await API.graphql({
					query: queries.getUser,
					variables: {
						id: cognitoUser.username,
					},
				});
				if (userData && userData.data)
					dispatch(setUserProfile(userData.data.getUser));
				res(true);
			} catch (error) {
				res(false);
			}
		});
	};
}

export function fetchUserBrands(): ThunkAction<
	Promise<any>,
	IAppState,
	{},
	AnyAction
> {
	return async (dispatch, getState) => {
		return new Promise(async (res, rej) => {});
	};
}

export function fetchUserCampaigns(): ThunkAction<
	Promise<any>,
	IAppState,
	{},
	AnyAction
> {
	return async (dispatch, getState) => {
		return new Promise(async (res, rej) => {});
	};
}
