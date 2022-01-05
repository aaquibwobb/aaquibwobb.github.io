/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      lastMessage {
        id
        content
        chatroomID
        userID
        createdAt
        updatedAt
        chatRoomMessagesId
      }
      Messages {
        nextToken
      }
      ChatRoomUsers
      ChatRoomUserMails
      isGroup
      admins {
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $id: ID
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChatRooms(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        ChatRoomUsers
        ChatRoomUserMails
        isGroup
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      content
      chatroomID
      userID
      createdAt
      updatedAt
      chatRoomMessagesId
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        chatroomID
        userID
        createdAt
        updatedAt
        chatRoomMessagesId
      }
      nextToken
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      Name
      Goals
      Moto
      NoOfInfluencer
      Gender
      Platform
      Brand {
        id
        name
        website
        uid
        details
        email
        phoneNo
        createdAt
        updatedAt
      }
      Categories
      Location
      minAge
      maxAge
      Language
      FollowerRange {
        label
        minFollowers
        maxFollowers
      }
      Owner {
        id
        name
        imageUrl
        status
        uid
        bio
        website
        gender
        role
        email
        phone
        languages
        interests
        categories
        chatrooms
        createdAt
        updatedAt
      }
      CampaignStatus
      Deliverables {
        count
      }
      Requirements
      MobileNo
      Email
      Payouts {
        payoutType
        maxMilestones
      }
      BarterPayouts {
        milestoneTitle
        dueDate
        percentage
      }
      CashPayouts {
        milestoneTitle
        dueDate
        percentage
      }
      CPAProductLink
      CPACommissionRate
      CPAProductPrice
      uid
      Submissions {
        influencerId
        status
      }
      OngoingCampaigns {
        nextToken
      }
      createdAt
      updatedAt
      userCampaignsId
      brandCampaignsId
      OwnerUserID
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $id: ID
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCampaigns(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        Name
        Goals
        Moto
        NoOfInfluencer
        Gender
        Platform
        Categories
        Location
        minAge
        maxAge
        Language
        CampaignStatus
        Requirements
        MobileNo
        Email
        CPAProductLink
        CPACommissionRate
        CPAProductPrice
        uid
        createdAt
        updatedAt
        userCampaignsId
        brandCampaignsId
        OwnerUserID
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUrl
      status
      uid
      bio
      website
      gender
      role
      email
      phone
      languages
      interests
      categories
      pushNotificationTokens {
        service
        deviceTokens
      }
      campaigns {
        nextToken
      }
      chatrooms
      ownedChatrooms {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        imageUrl
        status
        uid
        bio
        website
        gender
        role
        email
        phone
        languages
        interests
        categories
        chatrooms
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        imageUrl
        status
        uid
        bio
        website
        gender
        role
        email
        phone
        languages
        interests
        categories
        chatrooms
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      user {
        id
        name
        imageUrl
        status
        uid
        bio
        website
        gender
        role
        email
        phone
        languages
        interests
        categories
        chatrooms
        createdAt
        updatedAt
      }
      Title
      deliverableType {
        deliverableYoutube
        deliverableInsta
      }
      Status
      Brief
      sharedID
      acceptedAt
      completedAt
      dueDate
      createdAt
      updatedAt
      campaignOngoingCampaignsId
      taskUserId
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $id: ID
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTasks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        Title
        Status
        Brief
        sharedID
        acceptedAt
        completedAt
        dueDate
        createdAt
        updatedAt
        campaignOngoingCampaignsId
        taskUserId
      }
      nextToken
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      name
      website
      uid
      details
      email
      phoneNo
      campaigns {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        website
        uid
        details
        email
        phoneNo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoomAdmins = /* GraphQL */ `
  query GetChatRoomAdmins($id: ID!) {
    getChatRoomAdmins(id: $id) {
      id
      chatRoomID
      userID
      chatRoom {
        id
        ChatRoomUsers
        ChatRoomUserMails
        isGroup
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      user {
        id
        name
        imageUrl
        status
        uid
        bio
        website
        gender
        role
        email
        phone
        languages
        interests
        categories
        chatrooms
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatRoomAdmins = /* GraphQL */ `
  query ListChatRoomAdmins(
    $filter: ModelChatRoomAdminsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomID
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
