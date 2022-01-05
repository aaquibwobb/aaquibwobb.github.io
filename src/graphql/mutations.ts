/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createChatRoomAdmins = /* GraphQL */ `
  mutation CreateChatRoomAdmins(
    $input: CreateChatRoomAdminsInput!
    $condition: ModelChatRoomAdminsConditionInput
  ) {
    createChatRoomAdmins(input: $input, condition: $condition) {
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
export const updateChatRoomAdmins = /* GraphQL */ `
  mutation UpdateChatRoomAdmins(
    $input: UpdateChatRoomAdminsInput!
    $condition: ModelChatRoomAdminsConditionInput
  ) {
    updateChatRoomAdmins(input: $input, condition: $condition) {
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
export const deleteChatRoomAdmins = /* GraphQL */ `
  mutation DeleteChatRoomAdmins(
    $input: DeleteChatRoomAdminsInput!
    $condition: ModelChatRoomAdminsConditionInput
  ) {
    deleteChatRoomAdmins(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
