/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCampaignInput = {
  id?: string | null,
  Name: string,
  Goals?: Array< string | null > | null,
  Moto: string,
  NoOfInfluencer?: number | null,
  Gender?: Gender | null,
  Platform: Platform,
  Categories: Array< Category | null >,
  Location?: string | null,
  minAge?: number | null,
  maxAge?: number | null,
  Language?: string | null,
  FollowerRange?: Array< FolloweRangeInput | null > | null,
  CampaignStatus?: CampaignStatus | null,
  Deliverables?: Array< DeliverablesInput | null > | null,
  Requirements?: Array< string | null > | null,
  MobileNo?: string | null,
  Email?: string | null,
  Payouts?: Array< PayoutElementInput | null > | null,
  BarterPayouts?: Array< DeliveryMilestoneInput | null > | null,
  CashPayouts?: Array< DeliveryMilestoneInput | null > | null,
  CPAProductLink?: string | null,
  CPACommissionRate?: string | null,
  CPAProductPrice?: number | null,
  uid: string,
  Submissions?: Array< CampaignSubmissionInput | null > | null,
  userCampaignsId?: string | null,
  brandCampaignsId?: string | null,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS",
}


export enum Platform {
  YOUTUBE = "YOUTUBE",
  INSTAGRAM = "INSTAGRAM",
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
  MEME = "MEME",
}


export type FolloweRangeInput = {
  label: string,
  minFollowers: number,
  maxFollowers: number,
};

export enum CampaignStatus {
  DRAFT = "DRAFT",
  SUBMITTED = "SUBMITTED",
  PUBLISHED = "PUBLISHED",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
}


export type DeliverablesInput = {
  deliverableType?: DeliverableTypeInput | null,
  count?: number | null,
};

export type DeliverableTypeInput = {
  deliverableYoutube?: DeliverableTypeYoutube | null,
  deliverableInsta?: DeliverableTypeInsta | null,
};

export enum DeliverableTypeYoutube {
  DEDICATED_VIDEO = "DEDICATED_VIDEO",
  INTEGRATED_VIDEO = "INTEGRATED_VIDEO",
  SHORT = "SHORT",
}


export enum DeliverableTypeInsta {
  REEL = "REEL",
  SWIPE_UP_STORY = "SWIPE_UP_STORY",
  IGTV = "IGTV",
  STATIC_POST = "STATIC_POST",
  VIDEO_POST = "VIDEO_POST",
  CONTENT_ONLY = "CONTENT_ONLY",
}


export type PayoutElementInput = {
  payoutType?: PayoutType | null,
  maxMilestones?: number | null,
};

export enum PayoutType {
  BARTER = "BARTER",
  VARIABLE = "VARIABLE",
  FIXED = "FIXED",
  CPA = "CPA",
}


export type DeliveryMilestoneInput = {
  milestoneTitle: string,
  dueDate: string,
  percentage: number,
};

export type CampaignSubmissionInput = {
  influencerId: string,
  milestones?: Array< DeliveryMilestoneInput | null > | null,
  quizAnswer?: Array< QuizElementInput | null > | null,
  status?: JobStatus | null,
};

export type QuizElementInput = {
  question?: string | null,
  options?: Array< string | null > | null,
};

export enum JobStatus {
  SHORT_LISTED = "SHORT_LISTED",
  HIRED = "HIRED",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED",
}


export type ModelCampaignConditionInput = {
  Name?: ModelStringInput | null,
  Goals?: ModelStringInput | null,
  Moto?: ModelStringInput | null,
  NoOfInfluencer?: ModelIntInput | null,
  Gender?: ModelGenderInput | null,
  Platform?: ModelPlatformInput | null,
  Categories?: ModelCategoryInput | null,
  Location?: ModelStringInput | null,
  minAge?: ModelIntInput | null,
  maxAge?: ModelIntInput | null,
  Language?: ModelStringInput | null,
  CampaignStatus?: ModelCampaignStatusInput | null,
  Requirements?: ModelStringInput | null,
  MobileNo?: ModelStringInput | null,
  Email?: ModelStringInput | null,
  CPAProductLink?: ModelStringInput | null,
  CPACommissionRate?: ModelStringInput | null,
  CPAProductPrice?: ModelIntInput | null,
  uid?: ModelStringInput | null,
  and?: Array< ModelCampaignConditionInput | null > | null,
  or?: Array< ModelCampaignConditionInput | null > | null,
  not?: ModelCampaignConditionInput | null,
  userCampaignsId?: ModelIDInput | null,
  brandCampaignsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type ModelPlatformInput = {
  eq?: Platform | null,
  ne?: Platform | null,
};

export type ModelCategoryInput = {
  eq?: Category | null,
  ne?: Category | null,
};

export type ModelCampaignStatusInput = {
  eq?: CampaignStatus | null,
  ne?: CampaignStatus | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Campaign = {
  __typename: "Campaign",
  id: string,
  Name: string,
  Goals?: Array< string | null > | null,
  Moto: string,
  NoOfInfluencer?: number | null,
  Gender?: Gender | null,
  Platform: Platform,
  Brand?: Brand | null,
  Categories: Array< Category | null >,
  Location?: string | null,
  minAge?: number | null,
  maxAge?: number | null,
  Language?: string | null,
  FollowerRange?:  Array<FolloweRange | null > | null,
  Owner: User,
  CampaignStatus?: CampaignStatus | null,
  Deliverables?:  Array<Deliverables | null > | null,
  Requirements?: Array< string | null > | null,
  MobileNo?: string | null,
  Email?: string | null,
  Payouts?:  Array<PayoutElement | null > | null,
  BarterPayouts?:  Array<DeliveryMilestone | null > | null,
  CashPayouts?:  Array<DeliveryMilestone | null > | null,
  CPAProductLink?: string | null,
  CPACommissionRate?: string | null,
  CPAProductPrice?: number | null,
  uid: string,
  Submissions?:  Array<CampaignSubmission | null > | null,
  OngoingCampaigns?: ModelTaskConnection | null,
  createdAt: string,
  updatedAt: string,
  userCampaignsId?: string | null,
  brandCampaignsId?: string | null,
  OwnerUserID?: string | null,
};

export type Brand = {
  __typename: "Brand",
  id: string,
  name?: string | null,
  website?: string | null,
  uid?: string | null,
  details?: string | null,
  email?: string | null,
  phoneNo?: string | null,
  campaigns?: ModelCampaignConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCampaignConnection = {
  __typename: "ModelCampaignConnection",
  items:  Array<Campaign | null >,
  nextToken?: string | null,
};

export type FolloweRange = {
  __typename: "FolloweRange",
  label: string,
  minFollowers: number,
  maxFollowers: number,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  imageUrl?: string | null,
  status?: string | null,
  uid: string,
  bio?: string | null,
  website?: string | null,
  gender?: Gender | null,
  role: UserRole,
  email?: string | null,
  phone?: string | null,
  languages?: string | null,
  interests?: string | null,
  categories?: Array< Category | null > | null,
  pushNotificationTokens?:  Array<PushNotificationDeviceToken | null > | null,
  campaigns?: ModelCampaignConnection | null,
  chatrooms?: Array< string | null > | null,
  ownedChatrooms?: ModelChatRoomAdminsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum UserRole {
  INFLUENCER = "INFLUENCER",
  TALENT_AGENCY = "TALENT_AGENCY",
  BRAND = "BRAND",
  MARKETING_AGENCY = "MARKETING_AGENCY",
  FREELANCE_MARKETER = "FREELANCE_MARKETER",
}


export type PushNotificationDeviceToken = {
  __typename: "PushNotificationDeviceToken",
  service?: PushNotificationService | null,
  deviceTokens?: Array< string | null > | null,
};

export enum PushNotificationService {
  APNS = "APNS",
  FCM = "FCM",
  BAIDU = "BAIDU",
  ADM = "ADM",
}


export type ModelChatRoomAdminsConnection = {
  __typename: "ModelChatRoomAdminsConnection",
  items:  Array<ChatRoomAdmins | null >,
  nextToken?: string | null,
};

export type ChatRoomAdmins = {
  __typename: "ChatRoomAdmins",
  id: string,
  chatRoomID: string,
  userID: string,
  chatRoom: ChatRoom,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  lastMessage?: Message | null,
  Messages?: ModelMessageConnection | null,
  ChatRoomUsers?: Array< string | null > | null,
  ChatRoomUserMails?: Array< string | null > | null,
  isGroup?: boolean | null,
  admins?: ModelChatRoomAdminsConnection | null,
  createdAt: string,
  updatedAt: string,
  chatRoomLastMessageId?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  createdAt: string,
  updatedAt: string,
  chatRoomMessagesId?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Deliverables = {
  __typename: "Deliverables",
  deliverableType?: DeliverableType | null,
  count?: number | null,
};

export type DeliverableType = {
  __typename: "DeliverableType",
  deliverableYoutube?: DeliverableTypeYoutube | null,
  deliverableInsta?: DeliverableTypeInsta | null,
};

export type PayoutElement = {
  __typename: "PayoutElement",
  payoutType?: PayoutType | null,
  maxMilestones?: number | null,
};

export type DeliveryMilestone = {
  __typename: "DeliveryMilestone",
  milestoneTitle: string,
  dueDate: string,
  percentage: number,
};

export type CampaignSubmission = {
  __typename: "CampaignSubmission",
  influencerId: string,
  milestones?:  Array<DeliveryMilestone | null > | null,
  quizAnswer?:  Array<QuizElement | null > | null,
  status?: JobStatus | null,
};

export type QuizElement = {
  __typename: "QuizElement",
  question?: string | null,
  options?: Array< string | null > | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  user?: User | null,
  Title?: string | null,
  deliverableType: DeliverableType,
  Status?: TaskStatus | null,
  Brief: string,
  sharedID: string,
  acceptedAt?: string | null,
  completedAt?: string | null,
  dueDate?: string | null,
  createdAt: string,
  updatedAt: string,
  campaignOngoingCampaignsId?: string | null,
  taskUserId?: string | null,
};

export enum TaskStatus {
  TOBECOMPLETED = "TOBECOMPLETED",
  COMPLETED = "COMPLETED",
  ONGOING = "ONGOING",
}


export type UpdateCampaignInput = {
  id: string,
  Name?: string | null,
  Goals?: Array< string | null > | null,
  Moto?: string | null,
  NoOfInfluencer?: number | null,
  Gender?: Gender | null,
  Platform?: Platform | null,
  Categories?: Array< Category | null > | null,
  Location?: string | null,
  minAge?: number | null,
  maxAge?: number | null,
  Language?: string | null,
  FollowerRange?: Array< FolloweRangeInput | null > | null,
  CampaignStatus?: CampaignStatus | null,
  Deliverables?: Array< DeliverablesInput | null > | null,
  Requirements?: Array< string | null > | null,
  MobileNo?: string | null,
  Email?: string | null,
  Payouts?: Array< PayoutElementInput | null > | null,
  BarterPayouts?: Array< DeliveryMilestoneInput | null > | null,
  CashPayouts?: Array< DeliveryMilestoneInput | null > | null,
  CPAProductLink?: string | null,
  CPACommissionRate?: string | null,
  CPAProductPrice?: number | null,
  uid?: string | null,
  Submissions?: Array< CampaignSubmissionInput | null > | null,
  userCampaignsId?: string | null,
  brandCampaignsId?: string | null,
};

export type DeleteCampaignInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  ChatRoomUsers?: Array< string | null > | null,
  ChatRoomUserMails?: Array< string | null > | null,
  isGroup?: boolean | null,
  chatRoomLastMessageId?: string | null,
};

export type ModelChatRoomConditionInput = {
  ChatRoomUsers?: ModelIDInput | null,
  ChatRoomUserMails?: ModelStringInput | null,
  isGroup?: ModelBooleanInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateChatRoomInput = {
  id: string,
  ChatRoomUsers?: Array< string | null > | null,
  ChatRoomUserMails?: Array< string | null > | null,
  isGroup?: boolean | null,
  chatRoomLastMessageId?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  chatRoomMessagesId?: string | null,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  chatRoomMessagesId?: ModelIDInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  chatRoomMessagesId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUrl?: string | null,
  status?: string | null,
  uid: string,
  bio?: string | null,
  website?: string | null,
  gender?: Gender | null,
  role: UserRole,
  email?: string | null,
  phone?: string | null,
  languages?: string | null,
  interests?: string | null,
  categories?: Array< Category | null > | null,
  pushNotificationTokens?: Array< PushNotificationDeviceTokenInput | null > | null,
  chatrooms?: Array< string | null > | null,
};

export type PushNotificationDeviceTokenInput = {
  service?: PushNotificationService | null,
  deviceTokens?: Array< string | null > | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  status?: ModelStringInput | null,
  uid?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  website?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  role?: ModelUserRoleInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  languages?: ModelStringInput | null,
  interests?: ModelStringInput | null,
  categories?: ModelCategoryListInput | null,
  chatrooms?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelUserRoleInput = {
  eq?: UserRole | null,
  ne?: UserRole | null,
};

export type ModelCategoryListInput = {
  eq?: Array< Category | null > | null,
  ne?: Array< Category | null > | null,
  contains?: Category | null,
  notContains?: Category | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUrl?: string | null,
  status?: string | null,
  uid?: string | null,
  bio?: string | null,
  website?: string | null,
  gender?: Gender | null,
  role?: UserRole | null,
  email?: string | null,
  phone?: string | null,
  languages?: string | null,
  interests?: string | null,
  categories?: Array< Category | null > | null,
  pushNotificationTokens?: Array< PushNotificationDeviceTokenInput | null > | null,
  chatrooms?: Array< string | null > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChatRoomAdminsInput = {
  id?: string | null,
  chatRoomID: string,
  userID: string,
};

export type ModelChatRoomAdminsConditionInput = {
  chatRoomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelChatRoomAdminsConditionInput | null > | null,
  or?: Array< ModelChatRoomAdminsConditionInput | null > | null,
  not?: ModelChatRoomAdminsConditionInput | null,
};

export type UpdateChatRoomAdminsInput = {
  id: string,
  chatRoomID?: string | null,
  userID?: string | null,
};

export type DeleteChatRoomAdminsInput = {
  id: string,
};

export type CreateTaskInput = {
  id?: string | null,
  Title?: string | null,
  deliverableType: DeliverableTypeInput,
  Status?: TaskStatus | null,
  Brief: string,
  sharedID: string,
  acceptedAt?: string | null,
  completedAt?: string | null,
  dueDate?: string | null,
  campaignOngoingCampaignsId?: string | null,
  taskUserId?: string | null,
};

export type ModelTaskConditionInput = {
  Title?: ModelStringInput | null,
  Status?: ModelTaskStatusInput | null,
  Brief?: ModelStringInput | null,
  sharedID?: ModelStringInput | null,
  acceptedAt?: ModelStringInput | null,
  completedAt?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
  campaignOngoingCampaignsId?: ModelIDInput | null,
  taskUserId?: ModelIDInput | null,
};

export type ModelTaskStatusInput = {
  eq?: TaskStatus | null,
  ne?: TaskStatus | null,
};

export type UpdateTaskInput = {
  id: string,
  Title?: string | null,
  deliverableType?: DeliverableTypeInput | null,
  Status?: TaskStatus | null,
  Brief?: string | null,
  sharedID?: string | null,
  acceptedAt?: string | null,
  completedAt?: string | null,
  dueDate?: string | null,
  campaignOngoingCampaignsId?: string | null,
  taskUserId?: string | null,
};

export type DeleteTaskInput = {
  id: string,
};

export type CreateBrandInput = {
  id?: string | null,
  name?: string | null,
  website?: string | null,
  uid?: string | null,
  details?: string | null,
  email?: string | null,
  phoneNo?: string | null,
};

export type ModelBrandConditionInput = {
  name?: ModelStringInput | null,
  website?: ModelStringInput | null,
  uid?: ModelStringInput | null,
  details?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNo?: ModelStringInput | null,
  and?: Array< ModelBrandConditionInput | null > | null,
  or?: Array< ModelBrandConditionInput | null > | null,
  not?: ModelBrandConditionInput | null,
};

export type UpdateBrandInput = {
  id: string,
  name?: string | null,
  website?: string | null,
  uid?: string | null,
  details?: string | null,
  email?: string | null,
  phoneNo?: string | null,
};

export type DeleteBrandInput = {
  id: string,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  ChatRoomUsers?: ModelIDInput | null,
  ChatRoomUserMails?: ModelStringInput | null,
  isGroup?: ModelBooleanInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  chatRoomMessagesId?: ModelIDInput | null,
};

export type ModelCampaignFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  Goals?: ModelStringInput | null,
  Moto?: ModelStringInput | null,
  NoOfInfluencer?: ModelIntInput | null,
  Gender?: ModelGenderInput | null,
  Platform?: ModelPlatformInput | null,
  Categories?: ModelCategoryInput | null,
  Location?: ModelStringInput | null,
  minAge?: ModelIntInput | null,
  maxAge?: ModelIntInput | null,
  Language?: ModelStringInput | null,
  CampaignStatus?: ModelCampaignStatusInput | null,
  Requirements?: ModelStringInput | null,
  MobileNo?: ModelStringInput | null,
  Email?: ModelStringInput | null,
  CPAProductLink?: ModelStringInput | null,
  CPACommissionRate?: ModelStringInput | null,
  CPAProductPrice?: ModelIntInput | null,
  uid?: ModelStringInput | null,
  and?: Array< ModelCampaignFilterInput | null > | null,
  or?: Array< ModelCampaignFilterInput | null > | null,
  not?: ModelCampaignFilterInput | null,
  userCampaignsId?: ModelIDInput | null,
  brandCampaignsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  status?: ModelStringInput | null,
  uid?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  website?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  role?: ModelUserRoleInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  languages?: ModelStringInput | null,
  interests?: ModelStringInput | null,
  categories?: ModelCategoryListInput | null,
  chatrooms?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  imageUrl?: SearchableStringFilterInput | null,
  status?: SearchableStringFilterInput | null,
  uid?: SearchableStringFilterInput | null,
  bio?: SearchableStringFilterInput | null,
  website?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  phone?: SearchableStringFilterInput | null,
  languages?: SearchableStringFilterInput | null,
  interests?: SearchableStringFilterInput | null,
  chatrooms?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  gender?: SearchableStringFilterInput | null,
  role?: SearchableStringFilterInput | null,
  categories?: SearchableStringFilterInput | null,
  and?: Array< SearchableUserFilterInput | null > | null,
  or?: Array< SearchableUserFilterInput | null > | null,
  not?: SearchableUserFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserSortableFields {
  id = "id",
  name = "name",
  imageUrl = "imageUrl",
  status = "status",
  uid = "uid",
  bio = "bio",
  website = "website",
  email = "email",
  phone = "phone",
  languages = "languages",
  interests = "interests",
  chatrooms = "chatrooms",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUserAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableUserAggregateField {
  id = "id",
  name = "name",
  imageUrl = "imageUrl",
  status = "status",
  uid = "uid",
  bio = "bio",
  website = "website",
  gender = "gender",
  role = "role",
  email = "email",
  phone = "phone",
  languages = "languages",
  interests = "interests",
  categories = "categories",
  chatrooms = "chatrooms",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserConnection = {
  __typename: "SearchableUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  Title?: ModelStringInput | null,
  Status?: ModelTaskStatusInput | null,
  Brief?: ModelStringInput | null,
  sharedID?: ModelStringInput | null,
  acceptedAt?: ModelStringInput | null,
  completedAt?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
  campaignOngoingCampaignsId?: ModelIDInput | null,
  taskUserId?: ModelIDInput | null,
};

export type ModelBrandFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  website?: ModelStringInput | null,
  uid?: ModelStringInput | null,
  details?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNo?: ModelStringInput | null,
  and?: Array< ModelBrandFilterInput | null > | null,
  or?: Array< ModelBrandFilterInput | null > | null,
  not?: ModelBrandFilterInput | null,
};

export type ModelBrandConnection = {
  __typename: "ModelBrandConnection",
  items:  Array<Brand | null >,
  nextToken?: string | null,
};

export type ModelChatRoomAdminsFilterInput = {
  id?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelChatRoomAdminsFilterInput | null > | null,
  or?: Array< ModelChatRoomAdminsFilterInput | null > | null,
  not?: ModelChatRoomAdminsFilterInput | null,
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type CreateCampaignMutation = {
  createCampaign?:  {
    __typename: "Campaign",
    id: string,
    Name: string,
    Goals?: Array< string | null > | null,
    Moto: string,
    NoOfInfluencer?: number | null,
    Gender?: Gender | null,
    Platform: Platform,
    Brand?:  {
      __typename: "Brand",
      id: string,
      name?: string | null,
      website?: string | null,
      uid?: string | null,
      details?: string | null,
      email?: string | null,
      phoneNo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Categories: Array< Category | null >,
    Location?: string | null,
    minAge?: number | null,
    maxAge?: number | null,
    Language?: string | null,
    FollowerRange?:  Array< {
      __typename: "FolloweRange",
      label: string,
      minFollowers: number,
      maxFollowers: number,
    } | null > | null,
    Owner:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    CampaignStatus?: CampaignStatus | null,
    Deliverables?:  Array< {
      __typename: "Deliverables",
      count?: number | null,
    } | null > | null,
    Requirements?: Array< string | null > | null,
    MobileNo?: string | null,
    Email?: string | null,
    Payouts?:  Array< {
      __typename: "PayoutElement",
      payoutType?: PayoutType | null,
      maxMilestones?: number | null,
    } | null > | null,
    BarterPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CashPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CPAProductLink?: string | null,
    CPACommissionRate?: string | null,
    CPAProductPrice?: number | null,
    uid: string,
    Submissions?:  Array< {
      __typename: "CampaignSubmission",
      influencerId: string,
      status?: JobStatus | null,
    } | null > | null,
    OngoingCampaigns?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCampaignsId?: string | null,
    brandCampaignsId?: string | null,
    OwnerUserID?: string | null,
  } | null,
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type UpdateCampaignMutation = {
  updateCampaign?:  {
    __typename: "Campaign",
    id: string,
    Name: string,
    Goals?: Array< string | null > | null,
    Moto: string,
    NoOfInfluencer?: number | null,
    Gender?: Gender | null,
    Platform: Platform,
    Brand?:  {
      __typename: "Brand",
      id: string,
      name?: string | null,
      website?: string | null,
      uid?: string | null,
      details?: string | null,
      email?: string | null,
      phoneNo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Categories: Array< Category | null >,
    Location?: string | null,
    minAge?: number | null,
    maxAge?: number | null,
    Language?: string | null,
    FollowerRange?:  Array< {
      __typename: "FolloweRange",
      label: string,
      minFollowers: number,
      maxFollowers: number,
    } | null > | null,
    Owner:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    CampaignStatus?: CampaignStatus | null,
    Deliverables?:  Array< {
      __typename: "Deliverables",
      count?: number | null,
    } | null > | null,
    Requirements?: Array< string | null > | null,
    MobileNo?: string | null,
    Email?: string | null,
    Payouts?:  Array< {
      __typename: "PayoutElement",
      payoutType?: PayoutType | null,
      maxMilestones?: number | null,
    } | null > | null,
    BarterPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CashPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CPAProductLink?: string | null,
    CPACommissionRate?: string | null,
    CPAProductPrice?: number | null,
    uid: string,
    Submissions?:  Array< {
      __typename: "CampaignSubmission",
      influencerId: string,
      status?: JobStatus | null,
    } | null > | null,
    OngoingCampaigns?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCampaignsId?: string | null,
    brandCampaignsId?: string | null,
    OwnerUserID?: string | null,
  } | null,
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type DeleteCampaignMutation = {
  deleteCampaign?:  {
    __typename: "Campaign",
    id: string,
    Name: string,
    Goals?: Array< string | null > | null,
    Moto: string,
    NoOfInfluencer?: number | null,
    Gender?: Gender | null,
    Platform: Platform,
    Brand?:  {
      __typename: "Brand",
      id: string,
      name?: string | null,
      website?: string | null,
      uid?: string | null,
      details?: string | null,
      email?: string | null,
      phoneNo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Categories: Array< Category | null >,
    Location?: string | null,
    minAge?: number | null,
    maxAge?: number | null,
    Language?: string | null,
    FollowerRange?:  Array< {
      __typename: "FolloweRange",
      label: string,
      minFollowers: number,
      maxFollowers: number,
    } | null > | null,
    Owner:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    CampaignStatus?: CampaignStatus | null,
    Deliverables?:  Array< {
      __typename: "Deliverables",
      count?: number | null,
    } | null > | null,
    Requirements?: Array< string | null > | null,
    MobileNo?: string | null,
    Email?: string | null,
    Payouts?:  Array< {
      __typename: "PayoutElement",
      payoutType?: PayoutType | null,
      maxMilestones?: number | null,
    } | null > | null,
    BarterPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CashPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CPAProductLink?: string | null,
    CPACommissionRate?: string | null,
    CPAProductPrice?: number | null,
    uid: string,
    Submissions?:  Array< {
      __typename: "CampaignSubmission",
      influencerId: string,
      status?: JobStatus | null,
    } | null > | null,
    OngoingCampaigns?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCampaignsId?: string | null,
    brandCampaignsId?: string | null,
    OwnerUserID?: string | null,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRoomUsers?: Array< string | null > | null,
    ChatRoomUserMails?: Array< string | null > | null,
    isGroup?: boolean | null,
    admins?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRoomUsers?: Array< string | null > | null,
    ChatRoomUserMails?: Array< string | null > | null,
    isGroup?: boolean | null,
    admins?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRoomUsers?: Array< string | null > | null,
    ChatRoomUserMails?: Array< string | null > | null,
    isGroup?: boolean | null,
    admins?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl?: string | null,
    status?: string | null,
    uid: string,
    bio?: string | null,
    website?: string | null,
    gender?: Gender | null,
    role: UserRole,
    email?: string | null,
    phone?: string | null,
    languages?: string | null,
    interests?: string | null,
    categories?: Array< Category | null > | null,
    pushNotificationTokens?:  Array< {
      __typename: "PushNotificationDeviceToken",
      service?: PushNotificationService | null,
      deviceTokens?: Array< string | null > | null,
    } | null > | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    chatrooms?: Array< string | null > | null,
    ownedChatrooms?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl?: string | null,
    status?: string | null,
    uid: string,
    bio?: string | null,
    website?: string | null,
    gender?: Gender | null,
    role: UserRole,
    email?: string | null,
    phone?: string | null,
    languages?: string | null,
    interests?: string | null,
    categories?: Array< Category | null > | null,
    pushNotificationTokens?:  Array< {
      __typename: "PushNotificationDeviceToken",
      service?: PushNotificationService | null,
      deviceTokens?: Array< string | null > | null,
    } | null > | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    chatrooms?: Array< string | null > | null,
    ownedChatrooms?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl?: string | null,
    status?: string | null,
    uid: string,
    bio?: string | null,
    website?: string | null,
    gender?: Gender | null,
    role: UserRole,
    email?: string | null,
    phone?: string | null,
    languages?: string | null,
    interests?: string | null,
    categories?: Array< Category | null > | null,
    pushNotificationTokens?:  Array< {
      __typename: "PushNotificationDeviceToken",
      service?: PushNotificationService | null,
      deviceTokens?: Array< string | null > | null,
    } | null > | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    chatrooms?: Array< string | null > | null,
    ownedChatrooms?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomAdminsMutationVariables = {
  input: CreateChatRoomAdminsInput,
  condition?: ModelChatRoomAdminsConditionInput | null,
};

export type CreateChatRoomAdminsMutation = {
  createChatRoomAdmins?:  {
    __typename: "ChatRoomAdmins",
    id: string,
    chatRoomID: string,
    userID: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomUsers?: Array< string | null > | null,
      ChatRoomUserMails?: Array< string | null > | null,
      isGroup?: boolean | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomAdminsMutationVariables = {
  input: UpdateChatRoomAdminsInput,
  condition?: ModelChatRoomAdminsConditionInput | null,
};

export type UpdateChatRoomAdminsMutation = {
  updateChatRoomAdmins?:  {
    __typename: "ChatRoomAdmins",
    id: string,
    chatRoomID: string,
    userID: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomUsers?: Array< string | null > | null,
      ChatRoomUserMails?: Array< string | null > | null,
      isGroup?: boolean | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomAdminsMutationVariables = {
  input: DeleteChatRoomAdminsInput,
  condition?: ModelChatRoomAdminsConditionInput | null,
};

export type DeleteChatRoomAdminsMutation = {
  deleteChatRoomAdmins?:  {
    __typename: "ChatRoomAdmins",
    id: string,
    chatRoomID: string,
    userID: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomUsers?: Array< string | null > | null,
      ChatRoomUserMails?: Array< string | null > | null,
      isGroup?: boolean | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Title?: string | null,
    deliverableType:  {
      __typename: "DeliverableType",
      deliverableYoutube?: DeliverableTypeYoutube | null,
      deliverableInsta?: DeliverableTypeInsta | null,
    },
    Status?: TaskStatus | null,
    Brief: string,
    sharedID: string,
    acceptedAt?: string | null,
    completedAt?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
    campaignOngoingCampaignsId?: string | null,
    taskUserId?: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Title?: string | null,
    deliverableType:  {
      __typename: "DeliverableType",
      deliverableYoutube?: DeliverableTypeYoutube | null,
      deliverableInsta?: DeliverableTypeInsta | null,
    },
    Status?: TaskStatus | null,
    Brief: string,
    sharedID: string,
    acceptedAt?: string | null,
    completedAt?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
    campaignOngoingCampaignsId?: string | null,
    taskUserId?: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Title?: string | null,
    deliverableType:  {
      __typename: "DeliverableType",
      deliverableYoutube?: DeliverableTypeYoutube | null,
      deliverableInsta?: DeliverableTypeInsta | null,
    },
    Status?: TaskStatus | null,
    Brief: string,
    sharedID: string,
    acceptedAt?: string | null,
    completedAt?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
    campaignOngoingCampaignsId?: string | null,
    taskUserId?: string | null,
  } | null,
};

export type CreateBrandMutationVariables = {
  input: CreateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type CreateBrandMutation = {
  createBrand?:  {
    __typename: "Brand",
    id: string,
    name?: string | null,
    website?: string | null,
    uid?: string | null,
    details?: string | null,
    email?: string | null,
    phoneNo?: string | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBrandMutationVariables = {
  input: UpdateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type UpdateBrandMutation = {
  updateBrand?:  {
    __typename: "Brand",
    id: string,
    name?: string | null,
    website?: string | null,
    uid?: string | null,
    details?: string | null,
    email?: string | null,
    phoneNo?: string | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBrandMutationVariables = {
  input: DeleteBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type DeleteBrandMutation = {
  deleteBrand?:  {
    __typename: "Brand",
    id: string,
    name?: string | null,
    website?: string | null,
    uid?: string | null,
    details?: string | null,
    email?: string | null,
    phoneNo?: string | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRoomUsers?: Array< string | null > | null,
    ChatRoomUserMails?: Array< string | null > | null,
    isGroup?: boolean | null,
    admins?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  id?: string | null,
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      ChatRoomUsers?: Array< string | null > | null,
      ChatRoomUserMails?: Array< string | null > | null,
      isGroup?: boolean | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCampaignQueryVariables = {
  id: string,
};

export type GetCampaignQuery = {
  getCampaign?:  {
    __typename: "Campaign",
    id: string,
    Name: string,
    Goals?: Array< string | null > | null,
    Moto: string,
    NoOfInfluencer?: number | null,
    Gender?: Gender | null,
    Platform: Platform,
    Brand?:  {
      __typename: "Brand",
      id: string,
      name?: string | null,
      website?: string | null,
      uid?: string | null,
      details?: string | null,
      email?: string | null,
      phoneNo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Categories: Array< Category | null >,
    Location?: string | null,
    minAge?: number | null,
    maxAge?: number | null,
    Language?: string | null,
    FollowerRange?:  Array< {
      __typename: "FolloweRange",
      label: string,
      minFollowers: number,
      maxFollowers: number,
    } | null > | null,
    Owner:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    CampaignStatus?: CampaignStatus | null,
    Deliverables?:  Array< {
      __typename: "Deliverables",
      count?: number | null,
    } | null > | null,
    Requirements?: Array< string | null > | null,
    MobileNo?: string | null,
    Email?: string | null,
    Payouts?:  Array< {
      __typename: "PayoutElement",
      payoutType?: PayoutType | null,
      maxMilestones?: number | null,
    } | null > | null,
    BarterPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CashPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CPAProductLink?: string | null,
    CPACommissionRate?: string | null,
    CPAProductPrice?: number | null,
    uid: string,
    Submissions?:  Array< {
      __typename: "CampaignSubmission",
      influencerId: string,
      status?: JobStatus | null,
    } | null > | null,
    OngoingCampaigns?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCampaignsId?: string | null,
    brandCampaignsId?: string | null,
    OwnerUserID?: string | null,
  } | null,
};

export type ListCampaignsQueryVariables = {
  id?: string | null,
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCampaignsQuery = {
  listCampaigns?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      Name: string,
      Goals?: Array< string | null > | null,
      Moto: string,
      NoOfInfluencer?: number | null,
      Gender?: Gender | null,
      Platform: Platform,
      Categories: Array< Category | null >,
      Location?: string | null,
      minAge?: number | null,
      maxAge?: number | null,
      Language?: string | null,
      CampaignStatus?: CampaignStatus | null,
      Requirements?: Array< string | null > | null,
      MobileNo?: string | null,
      Email?: string | null,
      CPAProductLink?: string | null,
      CPACommissionRate?: string | null,
      CPAProductPrice?: number | null,
      uid: string,
      createdAt: string,
      updatedAt: string,
      userCampaignsId?: string | null,
      brandCampaignsId?: string | null,
      OwnerUserID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl?: string | null,
    status?: string | null,
    uid: string,
    bio?: string | null,
    website?: string | null,
    gender?: Gender | null,
    role: UserRole,
    email?: string | null,
    phone?: string | null,
    languages?: string | null,
    interests?: string | null,
    categories?: Array< Category | null > | null,
    pushNotificationTokens?:  Array< {
      __typename: "PushNotificationDeviceToken",
      service?: PushNotificationService | null,
      deviceTokens?: Array< string | null > | null,
    } | null > | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    chatrooms?: Array< string | null > | null,
    ownedChatrooms?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null,
  sort?: Array< SearchableUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUserAggregationInput | null > | null,
};

export type SearchUsersQuery = {
  searchUsers?:  {
    __typename: "SearchableUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Title?: string | null,
    deliverableType:  {
      __typename: "DeliverableType",
      deliverableYoutube?: DeliverableTypeYoutube | null,
      deliverableInsta?: DeliverableTypeInsta | null,
    },
    Status?: TaskStatus | null,
    Brief: string,
    sharedID: string,
    acceptedAt?: string | null,
    completedAt?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
    campaignOngoingCampaignsId?: string | null,
    taskUserId?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  id?: string | null,
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      Title?: string | null,
      Status?: TaskStatus | null,
      Brief: string,
      sharedID: string,
      acceptedAt?: string | null,
      completedAt?: string | null,
      dueDate?: string | null,
      createdAt: string,
      updatedAt: string,
      campaignOngoingCampaignsId?: string | null,
      taskUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBrandQueryVariables = {
  id: string,
};

export type GetBrandQuery = {
  getBrand?:  {
    __typename: "Brand",
    id: string,
    name?: string | null,
    website?: string | null,
    uid?: string | null,
    details?: string | null,
    email?: string | null,
    phoneNo?: string | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBrandsQueryVariables = {
  filter?: ModelBrandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBrandsQuery = {
  listBrands?:  {
    __typename: "ModelBrandConnection",
    items:  Array< {
      __typename: "Brand",
      id: string,
      name?: string | null,
      website?: string | null,
      uid?: string | null,
      details?: string | null,
      email?: string | null,
      phoneNo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomAdminsQueryVariables = {
  id: string,
};

export type GetChatRoomAdminsQuery = {
  getChatRoomAdmins?:  {
    __typename: "ChatRoomAdmins",
    id: string,
    chatRoomID: string,
    userID: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomUsers?: Array< string | null > | null,
      ChatRoomUserMails?: Array< string | null > | null,
      isGroup?: boolean | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomAdminsQueryVariables = {
  filter?: ModelChatRoomAdminsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomAdminsQuery = {
  listChatRoomAdmins?:  {
    __typename: "ModelChatRoomAdminsConnection",
    items:  Array< {
      __typename: "ChatRoomAdmins",
      id: string,
      chatRoomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRoomUsers?: Array< string | null > | null,
    ChatRoomUserMails?: Array< string | null > | null,
    isGroup?: boolean | null,
    admins?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRoomUsers?: Array< string | null > | null,
    ChatRoomUserMails?: Array< string | null > | null,
    isGroup?: boolean | null,
    admins?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      chatRoomMessagesId?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRoomUsers?: Array< string | null > | null,
    ChatRoomUserMails?: Array< string | null > | null,
    isGroup?: boolean | null,
    admins?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    chatRoomMessagesId?: string | null,
  } | null,
};

export type OnCreateCampaignSubscriptionVariables = {
  OwnerUserID?: string | null,
};

export type OnCreateCampaignSubscription = {
  onCreateCampaign?:  {
    __typename: "Campaign",
    id: string,
    Name: string,
    Goals?: Array< string | null > | null,
    Moto: string,
    NoOfInfluencer?: number | null,
    Gender?: Gender | null,
    Platform: Platform,
    Brand?:  {
      __typename: "Brand",
      id: string,
      name?: string | null,
      website?: string | null,
      uid?: string | null,
      details?: string | null,
      email?: string | null,
      phoneNo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Categories: Array< Category | null >,
    Location?: string | null,
    minAge?: number | null,
    maxAge?: number | null,
    Language?: string | null,
    FollowerRange?:  Array< {
      __typename: "FolloweRange",
      label: string,
      minFollowers: number,
      maxFollowers: number,
    } | null > | null,
    Owner:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    CampaignStatus?: CampaignStatus | null,
    Deliverables?:  Array< {
      __typename: "Deliverables",
      count?: number | null,
    } | null > | null,
    Requirements?: Array< string | null > | null,
    MobileNo?: string | null,
    Email?: string | null,
    Payouts?:  Array< {
      __typename: "PayoutElement",
      payoutType?: PayoutType | null,
      maxMilestones?: number | null,
    } | null > | null,
    BarterPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CashPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CPAProductLink?: string | null,
    CPACommissionRate?: string | null,
    CPAProductPrice?: number | null,
    uid: string,
    Submissions?:  Array< {
      __typename: "CampaignSubmission",
      influencerId: string,
      status?: JobStatus | null,
    } | null > | null,
    OngoingCampaigns?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCampaignsId?: string | null,
    brandCampaignsId?: string | null,
    OwnerUserID?: string | null,
  } | null,
};

export type OnUpdateCampaignSubscriptionVariables = {
  OwnerUserID?: string | null,
};

export type OnUpdateCampaignSubscription = {
  onUpdateCampaign?:  {
    __typename: "Campaign",
    id: string,
    Name: string,
    Goals?: Array< string | null > | null,
    Moto: string,
    NoOfInfluencer?: number | null,
    Gender?: Gender | null,
    Platform: Platform,
    Brand?:  {
      __typename: "Brand",
      id: string,
      name?: string | null,
      website?: string | null,
      uid?: string | null,
      details?: string | null,
      email?: string | null,
      phoneNo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Categories: Array< Category | null >,
    Location?: string | null,
    minAge?: number | null,
    maxAge?: number | null,
    Language?: string | null,
    FollowerRange?:  Array< {
      __typename: "FolloweRange",
      label: string,
      minFollowers: number,
      maxFollowers: number,
    } | null > | null,
    Owner:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    CampaignStatus?: CampaignStatus | null,
    Deliverables?:  Array< {
      __typename: "Deliverables",
      count?: number | null,
    } | null > | null,
    Requirements?: Array< string | null > | null,
    MobileNo?: string | null,
    Email?: string | null,
    Payouts?:  Array< {
      __typename: "PayoutElement",
      payoutType?: PayoutType | null,
      maxMilestones?: number | null,
    } | null > | null,
    BarterPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CashPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CPAProductLink?: string | null,
    CPACommissionRate?: string | null,
    CPAProductPrice?: number | null,
    uid: string,
    Submissions?:  Array< {
      __typename: "CampaignSubmission",
      influencerId: string,
      status?: JobStatus | null,
    } | null > | null,
    OngoingCampaigns?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCampaignsId?: string | null,
    brandCampaignsId?: string | null,
    OwnerUserID?: string | null,
  } | null,
};

export type OnDeleteCampaignSubscriptionVariables = {
  OwnerUserID?: string | null,
};

export type OnDeleteCampaignSubscription = {
  onDeleteCampaign?:  {
    __typename: "Campaign",
    id: string,
    Name: string,
    Goals?: Array< string | null > | null,
    Moto: string,
    NoOfInfluencer?: number | null,
    Gender?: Gender | null,
    Platform: Platform,
    Brand?:  {
      __typename: "Brand",
      id: string,
      name?: string | null,
      website?: string | null,
      uid?: string | null,
      details?: string | null,
      email?: string | null,
      phoneNo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Categories: Array< Category | null >,
    Location?: string | null,
    minAge?: number | null,
    maxAge?: number | null,
    Language?: string | null,
    FollowerRange?:  Array< {
      __typename: "FolloweRange",
      label: string,
      minFollowers: number,
      maxFollowers: number,
    } | null > | null,
    Owner:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    CampaignStatus?: CampaignStatus | null,
    Deliverables?:  Array< {
      __typename: "Deliverables",
      count?: number | null,
    } | null > | null,
    Requirements?: Array< string | null > | null,
    MobileNo?: string | null,
    Email?: string | null,
    Payouts?:  Array< {
      __typename: "PayoutElement",
      payoutType?: PayoutType | null,
      maxMilestones?: number | null,
    } | null > | null,
    BarterPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CashPayouts?:  Array< {
      __typename: "DeliveryMilestone",
      milestoneTitle: string,
      dueDate: string,
      percentage: number,
    } | null > | null,
    CPAProductLink?: string | null,
    CPACommissionRate?: string | null,
    CPAProductPrice?: number | null,
    uid: string,
    Submissions?:  Array< {
      __typename: "CampaignSubmission",
      influencerId: string,
      status?: JobStatus | null,
    } | null > | null,
    OngoingCampaigns?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCampaignsId?: string | null,
    brandCampaignsId?: string | null,
    OwnerUserID?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl?: string | null,
    status?: string | null,
    uid: string,
    bio?: string | null,
    website?: string | null,
    gender?: Gender | null,
    role: UserRole,
    email?: string | null,
    phone?: string | null,
    languages?: string | null,
    interests?: string | null,
    categories?: Array< Category | null > | null,
    pushNotificationTokens?:  Array< {
      __typename: "PushNotificationDeviceToken",
      service?: PushNotificationService | null,
      deviceTokens?: Array< string | null > | null,
    } | null > | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    chatrooms?: Array< string | null > | null,
    ownedChatrooms?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl?: string | null,
    status?: string | null,
    uid: string,
    bio?: string | null,
    website?: string | null,
    gender?: Gender | null,
    role: UserRole,
    email?: string | null,
    phone?: string | null,
    languages?: string | null,
    interests?: string | null,
    categories?: Array< Category | null > | null,
    pushNotificationTokens?:  Array< {
      __typename: "PushNotificationDeviceToken",
      service?: PushNotificationService | null,
      deviceTokens?: Array< string | null > | null,
    } | null > | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    chatrooms?: Array< string | null > | null,
    ownedChatrooms?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl?: string | null,
    status?: string | null,
    uid: string,
    bio?: string | null,
    website?: string | null,
    gender?: Gender | null,
    role: UserRole,
    email?: string | null,
    phone?: string | null,
    languages?: string | null,
    interests?: string | null,
    categories?: Array< Category | null > | null,
    pushNotificationTokens?:  Array< {
      __typename: "PushNotificationDeviceToken",
      service?: PushNotificationService | null,
      deviceTokens?: Array< string | null > | null,
    } | null > | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    chatrooms?: Array< string | null > | null,
    ownedChatrooms?:  {
      __typename: "ModelChatRoomAdminsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Title?: string | null,
    deliverableType:  {
      __typename: "DeliverableType",
      deliverableYoutube?: DeliverableTypeYoutube | null,
      deliverableInsta?: DeliverableTypeInsta | null,
    },
    Status?: TaskStatus | null,
    Brief: string,
    sharedID: string,
    acceptedAt?: string | null,
    completedAt?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
    campaignOngoingCampaignsId?: string | null,
    taskUserId?: string | null,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Title?: string | null,
    deliverableType:  {
      __typename: "DeliverableType",
      deliverableYoutube?: DeliverableTypeYoutube | null,
      deliverableInsta?: DeliverableTypeInsta | null,
    },
    Status?: TaskStatus | null,
    Brief: string,
    sharedID: string,
    acceptedAt?: string | null,
    completedAt?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
    campaignOngoingCampaignsId?: string | null,
    taskUserId?: string | null,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Title?: string | null,
    deliverableType:  {
      __typename: "DeliverableType",
      deliverableYoutube?: DeliverableTypeYoutube | null,
      deliverableInsta?: DeliverableTypeInsta | null,
    },
    Status?: TaskStatus | null,
    Brief: string,
    sharedID: string,
    acceptedAt?: string | null,
    completedAt?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
    campaignOngoingCampaignsId?: string | null,
    taskUserId?: string | null,
  } | null,
};

export type OnCreateBrandSubscription = {
  onCreateBrand?:  {
    __typename: "Brand",
    id: string,
    name?: string | null,
    website?: string | null,
    uid?: string | null,
    details?: string | null,
    email?: string | null,
    phoneNo?: string | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBrandSubscription = {
  onUpdateBrand?:  {
    __typename: "Brand",
    id: string,
    name?: string | null,
    website?: string | null,
    uid?: string | null,
    details?: string | null,
    email?: string | null,
    phoneNo?: string | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBrandSubscription = {
  onDeleteBrand?:  {
    __typename: "Brand",
    id: string,
    name?: string | null,
    website?: string | null,
    uid?: string | null,
    details?: string | null,
    email?: string | null,
    phoneNo?: string | null,
    campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomAdminsSubscription = {
  onCreateChatRoomAdmins?:  {
    __typename: "ChatRoomAdmins",
    id: string,
    chatRoomID: string,
    userID: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomUsers?: Array< string | null > | null,
      ChatRoomUserMails?: Array< string | null > | null,
      isGroup?: boolean | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomAdminsSubscription = {
  onUpdateChatRoomAdmins?:  {
    __typename: "ChatRoomAdmins",
    id: string,
    chatRoomID: string,
    userID: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomUsers?: Array< string | null > | null,
      ChatRoomUserMails?: Array< string | null > | null,
      isGroup?: boolean | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomAdminsSubscription = {
  onDeleteChatRoomAdmins?:  {
    __typename: "ChatRoomAdmins",
    id: string,
    chatRoomID: string,
    userID: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomUsers?: Array< string | null > | null,
      ChatRoomUserMails?: Array< string | null > | null,
      isGroup?: boolean | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUrl?: string | null,
      status?: string | null,
      uid: string,
      bio?: string | null,
      website?: string | null,
      gender?: Gender | null,
      role: UserRole,
      email?: string | null,
      phone?: string | null,
      languages?: string | null,
      interests?: string | null,
      categories?: Array< Category | null > | null,
      chatrooms?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
