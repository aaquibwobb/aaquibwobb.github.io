import {
	ModelInit,
	MutableModel,
	PersistentModelConstructor,
} from '@aws-amplify/datastore';

export enum CampaignStatus {
	DRAFT = 'DRAFT',
	SUBMITTED = 'SUBMITTED',
	PUBLISHED = 'PUBLISHED',
	ONGOING = 'ONGOING',
	COMPLETED = 'COMPLETED',
}

export enum PayoutType {
	BARTER = 'BARTER',
	VARIABLE = 'VARIABLE',
	FIXED = 'FIXED',
	CPA = 'CPA',
}

export enum Platform {
	YOUTUBE = 'YOUTUBE',
	INSTAGRAM = 'INSTAGRAM',
}

export enum Gender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
	OTHERS = 'OTHERS',
}

export enum JobStatus {
	SHORT_LISTED = 'SHORT_LISTED',
	HIRED = 'HIRED',
	ONGOING = 'ONGOING',
	COMPLETED = 'COMPLETED',
	REJECTED = 'REJECTED',
}

export enum PromotionGoals {
	PRODUCT_REVIEW = 'PRODUCT_REVIEW',
	PRODUCT_LAUNCH = 'PRODUCT_LAUNCH',
	BRAND_AWARENESS = 'BRAND_AWARENESS',
	APP_REVIEW = 'APP_REVIEW',
	PRODUCT_UNBOXING = 'PRODUCT_UNBOXING',
}

export enum DeliverableTypeYoutube {
	DEDICATED_VIDEO = 'DEDICATED_VIDEO',
	INTEGRATED_VIDEO = 'INTEGRATED_VIDEO',
	SHORT = 'SHORT',
}

export enum DeliverableTypeInsta {
	REEL = 'REEL',
	SWIPE_UP_STORY = 'SWIPE_UP_STORY',
	IGTV = 'IGTV',
	STATIC_POST = 'STATIC_POST',
	VIDEO_POST = 'VIDEO_POST',
	CONTENT_ONLY = 'CONTENT_ONLY',
}

export enum Category {
	LIFESTYLE_VLOGGING = 'LIFESTYLE_VLOGGING',
	PODCAST = 'PODCAST',
	PRANKS = 'PRANKS',
	BEAUTY = 'BEAUTY',
	SKINCARE = 'SKINCARE',
	HAIRCARE = 'HAIRCARE',
	MAKEUP_COSMETICS = 'MAKEUP_COSMETICS',
	FOOD = 'FOOD',
	HEALTHY_FOOD = 'HEALTHY_FOOD',
	BUDGET_FOOD = 'BUDGET_FOOD',
	RESTAURANT_CAFE = 'RESTAURANT_CAFE',
	CHEF = 'CHEF',
	COOKING = 'COOKING',
	BAKING = 'BAKING',
	FINANCE = 'FINANCE',
	CRYPTO = 'CRYPTO',
	STOCKS = 'STOCKS',
	INVESTMENTS = 'INVESTMENTS',
	FINANCIAL_EDUCATION = 'FINANCIAL_EDUCATION',
	FINANCIAL_WELLNESS = 'FINANCIAL_WELLNESS',
	TECH_GADGET = 'TECH_GADGET',
	COMEDY = 'COMEDY',
	HUMOUR_FUNNY = 'HUMOUR_FUNNY',
	STANDUP_COMEDIANS = 'STANDUP_COMEDIANS',
	SKETCH_COMEDY = 'SKETCH_COMEDY',
	SPORTS_GAMING = 'SPORTS_GAMING',
	VIDEO_GAMING = 'VIDEO_GAMING',
	BETTING = 'BETTING',
	OUTDOOR = 'OUTDOOR',
	SPORTS = 'SPORTS',
	EDUCATION = 'EDUCATION',
	GRADUATION_EXAMS = 'GRADUATION_EXAMS',
	ENGINEERING = 'ENGINEERING',
	NON_ENGINEERING = 'NON_ENGINEERING',
	POST_GRADUATE_EXAMS = 'POST_GRADUATE_EXAMS',
	CAT = 'CAT',
	GATE = 'GATE',
	GOVT_EXAMS = 'GOVT_EXAMS',
	UPSC = 'UPSC',
	BANKING = 'BANKING',
	FASHION = 'FASHION',
	MODELING = 'MODELING',
	BUDGET_FASHION = 'BUDGET_FASHION',
	LUXURY_GOODS = 'LUXURY_GOODS',
	PLUS_SIZE = 'PLUS_SIZE',
	TRAVEL = 'TRAVEL',
	DOMESTIC = 'DOMESTIC',
	INTERNATIONAL = 'INTERNATIONAL',
	BIKER = 'BIKER',
	BUSINESS = 'BUSINESS',
	CAREERS = 'CAREERS',
	MOTIVATION = 'MOTIVATION',
	HEALTH_WELLNESS = 'HEALTH_WELLNESS',
	DOCTORS = 'DOCTORS',
	DIETITIANS = 'DIETITIANS',
	YOGA = 'YOGA',
	FITNESS = 'FITNESS',
	HEALTHY_LIFESTYLE = 'HEALTHY_LIFESTYLE',
	GYMMING = 'GYMMING',
	WEIGHT_LIFTING = 'WEIGHT_LIFTING',
	WEIGHT_LOSS = 'WEIGHT_LOSS',
	ATHLETES = 'ATHLETES',
	TOY = 'TOY',
	CHILDREN = 'CHILDREN',
	BABY = 'BABY',
	WEDDING = 'WEDDING',
	PET = 'PET',
	DOG = 'DOG',
	OTHERS = 'OTHERS',
	DECOR = 'DECOR',
	HOME_DECOR = 'HOME_DECOR',
	GARDEN_DECOR = 'GARDEN_DECOR',
	INTERIOR = 'INTERIOR',
	DESIGNERS = 'DESIGNERS',
	ARCHITECTS = 'ARCHITECTS',
	REAL_ESTATE = 'REAL_ESTATE',
	RELATIONSHIPS = 'RELATIONSHIPS',
	SCHOOL_STUDENTS = 'SCHOOL_STUDENTS',
	COLLEGE_STUDENTS = 'COLLEGE_STUDENTS',
	MOMMYS = 'MOMMYS',
	FATHERS = 'FATHERS',
	DATING = 'DATING',
	MARRIED_COUPLE = 'MARRIED_COUPLE',
	AUTO = 'AUTO',
	CARS_BIKES = 'CARS_BIKES',
	COMMUNITIES = 'COMMUNITIES',
	LGBT = 'LGBT',
	ENTERTAINMENT = 'ENTERTAINMENT',
	PHOTOGRAPHY = 'PHOTOGRAPHY',
	TELEVISION_FILM = 'TELEVISION_FILM',
	SONGS = 'SONGS',
	MUSIC = 'MUSIC',
	ART_SKETCHING = 'ART_SKETCHING',
	POETRY = 'POETRY',
	NEWS = 'NEWS',
	MEME = 'MEME',
}

export enum PromotionGoals {
  PRODUCT_REVIEW = "PRODUCT_REVIEW",
  PRODUCT_LAUNCH = "PRODUCT_LAUNCH",
  BRAND_AWARENESS = "BRAND_AWARENESS",
  APP_REVIEW = "APP_REVIEW",
  PRODUCT_UNBOXING = "PRODUCT_UNBOXING"
}

export enum DeliverableTypeYoutube {
  DEDICATED_VIDEO = "DEDICATED_VIDEO",
  INTEGRATED_VIDEO = "INTEGRATED_VIDEO",
  SHORT = "SHORT"
}

export enum DeliverableTypeInsta {
  REEL = "REEL",
  SWIPE_UP_STORY = "SWIPE_UP_STORY",
  IGTV = "IGTV",
  STATIC_POST = "STATIC_POST",
  VIDEO_POST = "VIDEO_POST",
  CONTENT_ONLY = "CONTENT_ONLY"
}

export enum Category {
  LIFESTYLE_VLOGGING = "LIFESTYLE_VLOGGING",
  PODCAST = "PODCAST",
  PRANKS = "PRANKS",
  BEAUTY = "BEAUTY",
  SKINCARE = "SKINCARE",
  HAIRCARE = "HAIRCARE",
  MAKEUP_COSMETICS = "MAKEUP_COSMETICS",
  FOOD = "FOOD",
  HEALTHY_FOOD = "HEALTHY_FOOD",
  BUDGET_FOOD = "BUDGET_FOOD",
  RESTAURANT_CAFE = "RESTAURANT_CAFE",
  CHEF = "CHEF",
  COOKING = "COOKING",
  BAKING = "BAKING",
  FINANCE = "FINANCE",
  CRYPTO = "CRYPTO",
  STOCKS = "STOCKS",
  INVESTMENTS = "INVESTMENTS",
  FINANCIAL_EDUCATION = "FINANCIAL_EDUCATION",
  FINANCIAL_WELLNESS = "FINANCIAL_WELLNESS",
  TECH_GADGET = "TECH_GADGET",
  COMEDY = "COMEDY",
  HUMOUR_FUNNY = "HUMOUR_FUNNY",
  STANDUP_COMEDIANS = "STANDUP_COMEDIANS",
  SKETCH_COMEDY = "SKETCH_COMEDY",
  SPORTS_GAMING = "SPORTS_GAMING",
  VIDEO_GAMING = "VIDEO_GAMING",
  BETTING = "BETTING",
  OUTDOOR = "OUTDOOR",
  SPORTS = "SPORTS",
  EDUCATION = "EDUCATION",
  GRADUATION_EXAMS = "GRADUATION_EXAMS",
  ENGINEERING = "ENGINEERING",
  NON_ENGINEERING = "NON_ENGINEERING",
  POST_GRADUATE_EXAMS = "POST_GRADUATE_EXAMS",
  CAT = "CAT",
  GATE = "GATE",
  GOVT_EXAMS = "GOVT_EXAMS",
  UPSC = "UPSC",
  BANKING = "BANKING",
  FASHION = "FASHION",
  MODELING = "MODELING",
  BUDGET_FASHION = "BUDGET_FASHION",
  LUXURY_GOODS = "LUXURY_GOODS",
  PLUS_SIZE = "PLUS_SIZE",
  TRAVEL = "TRAVEL",
  DOMESTIC = "DOMESTIC",
  INTERNATIONAL = "INTERNATIONAL",
  BIKER = "BIKER",
  BUSINESS = "BUSINESS",
  CAREERS = "CAREERS",
  MOTIVATION = "MOTIVATION",
  HEALTH_WELLNESS = "HEALTH_WELLNESS",
  DOCTORS = "DOCTORS",
  DIETITIANS = "DIETITIANS",
  YOGA = "YOGA",
  FITNESS = "FITNESS",
  HEALTHY_LIFESTYLE = "HEALTHY_LIFESTYLE",
  GYMMING = "GYMMING",
  WEIGHT_LIFTING = "WEIGHT_LIFTING",
  WEIGHT_LOSS = "WEIGHT_LOSS",
  ATHLETES = "ATHLETES",
  TOY = "TOY",
  CHILDREN = "CHILDREN",
  BABY = "BABY",
  WEDDING = "WEDDING",
  PET = "PET",
  DOG = "DOG",
  OTHERS = "OTHERS",
  DECOR = "DECOR",
  HOME_DECOR = "HOME_DECOR",
  GARDEN_DECOR = "GARDEN_DECOR",
  INTERIOR = "INTERIOR",
  DESIGNERS = "DESIGNERS",
  ARCHITECTS = "ARCHITECTS",
  REAL_ESTATE = "REAL_ESTATE",
  RELATIONSHIPS = "RELATIONSHIPS",
  SCHOOL_STUDENTS = "SCHOOL_STUDENTS",
  COLLEGE_STUDENTS = "COLLEGE_STUDENTS",
  MOMMYS = "MOMMYS",
  FATHERS = "FATHERS",
  DATING = "DATING",
  MARRIED_COUPLE = "MARRIED_COUPLE",
  AUTO = "AUTO",
  CARS_BIKES = "CARS_BIKES",
  COMMUNITIES = "COMMUNITIES",
  LGBT = "LGBT",
  ENTERTAINMENT = "ENTERTAINMENT",
  PHOTOGRAPHY = "PHOTOGRAPHY",
  TELEVISION_FILM = "TELEVISION_FILM",
  SONGS = "SONGS",
  MUSIC = "MUSIC",
  ART_SKETCHING = "ART_SKETCHING",
  POETRY = "POETRY",
  NEWS = "NEWS",
  MEME = "MEME"
}

export enum UserRole {
	INFLUENCER = 'INFLUENCER',
	TALENT_AGENCY = 'TALENT_AGENCY',
	BRAND = 'BRAND',
	MARKETING_AGENCY = 'MARKETING_AGENCY',
	FREELANCE_MARKETER = 'FREELANCE_MARKETER',
}

export enum PushNotificationService {
	APNS = 'APNS',
	FCM = 'FCM',
	BAIDU = 'BAIDU',
	ADM = 'ADM',
}

export enum TaskStatus {
	TOBECOMPLETED = 'TOBECOMPLETED',
	COMPLETED = 'COMPLETED',
	ONGOING = 'ONGOING',
}

export declare class PayoutElement {
	readonly payoutType?: PayoutType | keyof typeof PayoutType;
	readonly maxMilestones?: number;
	constructor(init: ModelInit<PayoutElement>);
}

export declare class FolloweRange {
	readonly label: string;
	readonly minFollowers: number;
	readonly maxFollowers: number;
	constructor(init: ModelInit<FolloweRange>);
}

export declare class DeliveryMilestone {
	readonly milestoneTitle: string;
	readonly dueDate: string;
	readonly percentage: number;
	constructor(init: ModelInit<DeliveryMilestone>);
}

export declare class Deliverables {
	readonly deliverableType?: DeliverableType;
	readonly count?: number;
	constructor(init: ModelInit<Deliverables>);
}

export declare class DeliverableType {
	readonly deliverableYoutube?:
		| DeliverableTypeYoutube
		| keyof typeof DeliverableTypeYoutube;
	readonly deliverableInsta?:
		| DeliverableTypeInsta
		| keyof typeof DeliverableTypeInsta;
	constructor(init: ModelInit<DeliverableType>);
}

export declare class PushNotificationDeviceToken {
	readonly service?:
		| PushNotificationService
		| keyof typeof PushNotificationService;
	readonly deviceTokens?: (string | null)[];
	constructor(init: ModelInit<PushNotificationDeviceToken>);
}

export declare class CampaignSubmission {
	readonly influencerId: string;
	readonly milestones?: (DeliveryMilestone | null)[];
	readonly quizAnswer?: (QuizElement | null)[];
	readonly status?: JobStatus | keyof typeof JobStatus;
	constructor(init: ModelInit<CampaignSubmission>);
}

export declare class QuizElement {
	readonly question?: string;
	readonly options?: (string | null)[];
	constructor(init: ModelInit<QuizElement>);
}

type CampaignMetaData = {
	readOnlyFields: 'createdAt' | 'updatedAt';
};

type BrandMetaData = {
	readOnlyFields: 'createdAt' | 'updatedAt';
};

type UserMetaData = {
	readOnlyFields: 'createdAt' | 'updatedAt';
};

type ChatRoomMetaData = {
	readOnlyFields: 'createdAt' | 'updatedAt';
};

type MessageMetaData = {
	readOnlyFields: 'createdAt' | 'updatedAt';
};

type TaskMetaData = {
	readOnlyFields: 'createdAt' | 'updatedAt';
};

type ChatRoomAdminsMetaData = {
	readOnlyFields: 'createdAt' | 'updatedAt';
};

type ChatRoomAdminsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Campaign {
	readonly id: string;
	readonly Name: string;
	readonly Goals?: (string | null)[];
	readonly Moto: string;
	readonly NoOfInfluencer?: number;
	readonly Gender?: Gender | keyof typeof Gender;
	readonly Platform: Platform | keyof typeof Platform;
	readonly Brand?: Brand;
	readonly Categories: (Category | null)[] | keyof typeof Category;
	readonly Location?: string;
	readonly minAge?: number;
	readonly maxAge?: number;
	readonly Language?: string;
	readonly FollowerRange?: (FolloweRange | null)[];
	readonly Owner: User;
	readonly CampaignStatus?: CampaignStatus | keyof typeof CampaignStatus;
	readonly Deliverables?: (Deliverables | null)[];
	readonly Requirements?: (string | null)[];
	readonly MobileNo?: string;
	readonly Email?: string;
	readonly Payouts?: (PayoutElement | null)[];
	readonly BarterPayouts?: (DeliveryMilestone | null)[];
	readonly CashPayouts?: (DeliveryMilestone | null)[];
	readonly CPAProductLink?: string;
	readonly CPACommissionRate?: string;
	readonly CPAProductPrice?: number;
	readonly uid: string;
	readonly Submissions?: (CampaignSubmission | null)[];
	readonly OngoingCampaigns?: (Task | null)[];
	readonly createdAt?: string;
	readonly updatedAt?: string;
	readonly brandCampaignsId?: string;
	readonly userCampaignsId?: string;
	constructor(init: ModelInit<Campaign, CampaignMetaData>);
	static copyOf(
		source: Campaign,
		mutator: (
			draft: MutableModel<Campaign, CampaignMetaData>
		) => MutableModel<Campaign, CampaignMetaData> | void
	): Campaign;
}

export declare class Brand {
	readonly id: string;
	readonly name?: string;
	readonly website?: string;
	readonly uid?: string;
	readonly details?: string;
	readonly email?: string;
	readonly phoneNo?: string;
	readonly campaigns?: (Campaign | null)[];
	readonly createdAt?: string;
	readonly updatedAt?: string;
	constructor(init: ModelInit<Brand, BrandMetaData>);
	static copyOf(
		source: Brand,
		mutator: (
			draft: MutableModel<Brand, BrandMetaData>
		) => MutableModel<Brand, BrandMetaData> | void
	): Brand;
}

export declare class User {
	readonly id: string;
	readonly name: string;
	readonly imageUrl?: string;
	readonly status?: string;
	readonly uid: string;
	readonly bio?: string;
	readonly website?: string;
	readonly gender?: Gender | keyof typeof Gender;
	readonly role: UserRole | keyof typeof UserRole;
	readonly email?: string;
	readonly phone?: string;
	readonly languages?: string;
	readonly interests?: string;
	readonly categories?: (Category | null)[] | keyof typeof Category;
	readonly pushNotificationTokens?: (PushNotificationDeviceToken | null)[];
	readonly campaigns?: (Campaign | null)[];
	readonly chatrooms?: (string | null)[];
	readonly ownedChatrooms?: (ChatRoomAdmins | null)[];
	readonly createdAt?: string;
	readonly updatedAt?: string;
	constructor(init: ModelInit<User, UserMetaData>);
	static copyOf(
		source: User,
		mutator: (
			draft: MutableModel<User, UserMetaData>
		) => MutableModel<User, UserMetaData> | void
	): User;
}

export declare class ChatRoom {
	readonly id: string;
	readonly lastMessage?: Message;
	readonly Messages?: (Message | null)[];
	readonly ChatRoomUsers?: (string | null)[];
	readonly ChatRoomUserMails?: (string | null)[];
	readonly isGroup?: boolean;
	readonly admins?: (ChatRoomAdmins | null)[];
	readonly createdAt?: string;
	readonly updatedAt?: string;
	readonly chatRoomLastMessageId?: string;
	constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
	static copyOf(
		source: ChatRoom,
		mutator: (
			draft: MutableModel<ChatRoom, ChatRoomMetaData>
		) => MutableModel<ChatRoom, ChatRoomMetaData> | void
	): ChatRoom;
}

export declare class Message {
	readonly id: string;
	readonly content?: string;
	readonly chatroomID?: string;
	readonly userID?: string;
	readonly createdAt?: string;
	readonly updatedAt?: string;
	readonly chatRoomMessagesId?: string;
	constructor(init: ModelInit<Message, MessageMetaData>);
	static copyOf(
		source: Message,
		mutator: (
			draft: MutableModel<Message, MessageMetaData>
		) => MutableModel<Message, MessageMetaData> | void
	): Message;
}

export declare class Task {
	readonly id: string;
	readonly user?: User;
	readonly Title?: string;
	readonly deliverableType: DeliverableType;
	readonly Status?: TaskStatus | keyof typeof TaskStatus;
	readonly Brief: string;
	readonly sharedID: string;
	readonly acceptedAt?: string;
	readonly completedAt?: string;
	readonly dueDate?: string;
	readonly createdAt?: string;
	readonly updatedAt?: string;
	readonly campaignOngoingCampaignsId?: string;
	readonly taskUserId?: string;
	constructor(init: ModelInit<Task, TaskMetaData>);
	static copyOf(
		source: Task,
		mutator: (
			draft: MutableModel<Task, TaskMetaData>
		) => MutableModel<Task, TaskMetaData> | void
	): Task;
}

export declare class ChatRoomAdmins {
	readonly id: string;
	readonly user: User;
	readonly chatRoom: ChatRoom;
	readonly createdAt?: string;
	readonly updatedAt?: string;
	constructor(init: ModelInit<ChatRoomAdmins, ChatRoomAdminsMetaData>);
	static copyOf(
		source: ChatRoomAdmins,
		mutator: (
			draft: MutableModel<ChatRoomAdmins, ChatRoomAdminsMetaData>
		) => MutableModel<ChatRoomAdmins, ChatRoomAdminsMetaData> | void
	): ChatRoomAdmins;
}
