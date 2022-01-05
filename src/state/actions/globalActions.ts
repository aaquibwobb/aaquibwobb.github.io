import { Brand, Campaign } from '../../models';

interface SetCampaigns {
	type: 'set_campaigns';
	campaigns: Campaign[];
}

interface AppendCampaign {
	type: 'append_campaign';
	campaign: Campaign;
}

interface RemoveCampaign {
	type: 'remove_campaign';
	campaignId: string;
}

interface SetBrands {
	type: 'set_brands';
	brands: Brand[];
}

interface AppendBrand {
	type: 'append_brand';
	brand: Brand;
}

interface RemoveBrand {
	type: 'remove_brand';
	brandId: string;
}

export type IGlobalActions =
	| SetBrands
	| AppendBrand
	| RemoveBrand
	| SetCampaigns
	| AppendCampaign
	| RemoveCampaign;
