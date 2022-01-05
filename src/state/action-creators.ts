import { Brand, Campaign, User } from '../models';
import { IAction } from './actions';

export function setCurrentUser(user: any): IAction {
	return {
		type: 'set_active_user',
		user,
	};
}

export function setUserProfile(profile: User): IAction {
	return {
		type: 'set_user_profile',
		profile,
	};
}

export function signUserOut(): IAction {
	return {
		type: 'unset_active_user',
	};
}

export function setBrands(brands: Brand[]): IAction {
	return {
		type: 'set_brands',
		brands,
	};
}

export function setCampaigns(campaigns: Campaign[]): IAction {
	return {
		type: 'set_campaigns',
		campaigns,
	};
}

export function appendBrand(brand: Brand): IAction {
	return {
		type: 'append_brand',
		brand,
	};
}

export function appendCampaign(campaign: Campaign): IAction {
	return {
		type: 'append_campaign',
		campaign,
	};
}

export function removeBrand(brandId: string): IAction {
	return {
		type: 'remove_brand',
		brandId,
	};
}

export function removeCampaign(campaignId: string): IAction {
	return {
		type: 'remove_campaign',
		campaignId,
	};
}
