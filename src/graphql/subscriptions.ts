/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign($OwnerUserID: String) {
    onCreateCampaign(OwnerUserID: $OwnerUserID) {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign($OwnerUserID: String) {
    onUpdateCampaign(OwnerUserID: $OwnerUserID) {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign($OwnerUserID: String) {
    onDeleteCampaign(OwnerUserID: $OwnerUserID) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
export const onCreateChatRoomAdmins = /* GraphQL */ `
  subscription OnCreateChatRoomAdmins {
    onCreateChatRoomAdmins {
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
export const onUpdateChatRoomAdmins = /* GraphQL */ `
  subscription OnUpdateChatRoomAdmins {
    onUpdateChatRoomAdmins {
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
export const onDeleteChatRoomAdmins = /* GraphQL */ `
  subscription OnDeleteChatRoomAdmins {
    onDeleteChatRoomAdmins {
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
