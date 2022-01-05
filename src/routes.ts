export const Routes = {
	About: '/about',
	Base: '/',
	Home: '/app',
	Discover: '/app/discover',
	CreateCampaign:'/app/campaign/createCampaign',
	discoverWithFilter(filter: string) {
		return this.Discover + '?filter=' + filter;
	},
	BaseCampaigns: '/app/campaigns',
	MyCampaigns: '/app/campaigns/:status',
	campaigns(filter: string) {
		return `${this.BaseCampaigns}?filter=${filter}`;
	},
	BaseViewCampaigns: '/app/campaigns/view',
	viewCampaign(id: string) {
		return `${this.BaseViewCampaigns}/${id}`;
	},
	viewCampaignApplicants(campaign: string, filter: string = '') {
		return `${this.viewCampaign(campaign)}/applicants${
			filter ? `?filter=${filter}` : ''
		}`;
	},
	viewCampaignTasks(campaign: string) {
		return `${this.viewCampaign(campaign)}/tasks`;
	},
	PostedCampaigns: '/app/campaigns/posted',
	Messages: '/app/chat',
	Notifications: '/app/notifications',
	MyProfile: '/app/profile',
	EditProfile: '/app/profile/edit',
	Finance: '/app/finance',
	MyEarnings: '/app/finance/earnings',
	MyOrders: '/app/finance/orders',
	Affiliate: '/app/affiliate',
	UserManagement: '/app/user-management',
	SignOut: '/app/signout',
	HelpAndSupport: '/support',
	Auth: '/auth',
	Login: '/auth/login',
	LoginPassword: '/auth/login/password',
	Signup: '/auth/signup',
	OauthSignup: '/auth/oauth-signup',
	OauthConfirm: '/auth/oauth-confirm',
	OauthLand: '/auth/oauth',
	VerifyOTP: '/auth/signup/verify-otp',
	ForgotPassword: '/auth/password-forgotten',
	VerifyPasswordOTP: '/auth/password-forgotten/verify-otp',
	TermsAndCondition: '/legal/terms-and-conditions',
	PrivacyPolicies: '/legal/privacy-policies',
	StoreSection: '/app/productpage',
	InfluencerApplication: '/app/influencerapplicaton',
};
