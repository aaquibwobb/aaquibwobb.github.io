export const schema = {
    "models": {
        "Campaign": {
            "name": "Campaign",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Goals": {
                    "name": "Goals",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "Moto": {
                    "name": "Moto",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoOfInfluencer": {
                    "name": "NoOfInfluencer",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "Gender": {
                    "name": "Gender",
                    "isArray": false,
                    "type": {
                        "enum": "Gender"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Platform": {
                    "name": "Platform",
                    "isArray": false,
                    "type": {
                        "enum": "Platform"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "Brand": {
                    "name": "Brand",
                    "isArray": false,
                    "type": {
                        "model": "Brand"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "brandCampaignsId"
                    }
                },
                "Categories": {
                    "name": "Categories",
                    "isArray": true,
                    "type": {
                        "enum": "Category"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "Location": {
                    "name": "Location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "minAge": {
                    "name": "minAge",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "maxAge": {
                    "name": "maxAge",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "Language": {
                    "name": "Language",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FollowerRange": {
                    "name": "FollowerRange",
                    "isArray": true,
                    "type": {
                        "nonModel": "FolloweRange"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "Owner": {
                    "name": "Owner",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "userCampaignsId"
                    }
                },
                "CampaignStatus": {
                    "name": "CampaignStatus",
                    "isArray": false,
                    "type": {
                        "enum": "CampaignStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Deliverables": {
                    "name": "Deliverables",
                    "isArray": true,
                    "type": {
                        "nonModel": "Deliverables"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "Requirements": {
                    "name": "Requirements",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "MobileNo": {
                    "name": "MobileNo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Email": {
                    "name": "Email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Payouts": {
                    "name": "Payouts",
                    "isArray": true,
                    "type": {
                        "nonModel": "PayoutElement"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "BarterPayouts": {
                    "name": "BarterPayouts",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryMilestone"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "CashPayouts": {
                    "name": "CashPayouts",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryMilestone"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "CPAProductLink": {
                    "name": "CPAProductLink",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CPACommissionRate": {
                    "name": "CPACommissionRate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CPAProductPrice": {
                    "name": "CPAProductPrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "uid": {
                    "name": "uid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Submissions": {
                    "name": "Submissions",
                    "isArray": true,
                    "type": {
                        "nonModel": "CampaignSubmission"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "OngoingCampaigns": {
                    "name": "OngoingCampaigns",
                    "isArray": true,
                    "type": {
                        "model": "Task"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "campaignOngoingCampaignsId"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "brandCampaignsId": {
                    "name": "brandCampaignsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "userCampaignsId": {
                    "name": "userCampaignsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Campaigns",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "OwnerUserID",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Brand": {
            "name": "Brand",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "website": {
                    "name": "website",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "uid": {
                    "name": "uid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "details": {
                    "name": "details",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phoneNo": {
                    "name": "phoneNo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "campaigns": {
                    "name": "campaigns",
                    "isArray": true,
                    "type": {
                        "model": "Campaign"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "brandCampaignsId"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Brands",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "imageUrl": {
                    "name": "imageUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "uid": {
                    "name": "uid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "bio": {
                    "name": "bio",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "website": {
                    "name": "website",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": {
                        "enum": "Gender"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "role": {
                    "name": "role",
                    "isArray": false,
                    "type": {
                        "enum": "UserRole"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "languages": {
                    "name": "languages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "interests": {
                    "name": "interests",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "enum": "Category"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pushNotificationTokens": {
                    "name": "pushNotificationTokens",
                    "isArray": true,
                    "type": {
                        "nonModel": "PushNotificationDeviceToken"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "campaigns": {
                    "name": "campaigns",
                    "isArray": true,
                    "type": {
                        "model": "Campaign"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "userCampaignsId"
                    }
                },
                "chatrooms": {
                    "name": "chatrooms",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "ownedChatrooms": {
                    "name": "ownedChatrooms",
                    "isArray": true,
                    "type": {
                        "model": "ChatRoomAdmins"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "user"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "update",
                                    "create"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ChatRoom": {
            "name": "ChatRoom",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "lastMessage": {
                    "name": "lastMessage",
                    "isArray": false,
                    "type": {
                        "model": "Message"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id",
                        "targetName": "chatRoomLastMessageId"
                    }
                },
                "Messages": {
                    "name": "Messages",
                    "isArray": true,
                    "type": {
                        "model": "Message"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "chatRoomMessagesId"
                    }
                },
                "ChatRoomUsers": {
                    "name": "ChatRoomUsers",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "ChatRoomUserMails": {
                    "name": "ChatRoomUserMails",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "isGroup": {
                    "name": "isGroup",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "admins": {
                    "name": "admins",
                    "isArray": true,
                    "type": {
                        "model": "ChatRoomAdmins"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "chatRoom"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "chatRoomLastMessageId": {
                    "name": "chatRoomLastMessageId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ChatRooms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Message": {
            "name": "Message",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "chatroomID": {
                    "name": "chatroomID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "chatRoomMessagesId": {
                    "name": "chatRoomMessagesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Messages",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Task": {
            "name": "Task",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id",
                        "targetName": "taskUserId"
                    }
                },
                "Title": {
                    "name": "Title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliverableType": {
                    "name": "deliverableType",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliverableType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "Status": {
                    "name": "Status",
                    "isArray": false,
                    "type": {
                        "enum": "TaskStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Brief": {
                    "name": "Brief",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "sharedID": {
                    "name": "sharedID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "acceptedAt": {
                    "name": "acceptedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "completedAt": {
                    "name": "completedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "dueDate": {
                    "name": "dueDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "campaignOngoingCampaignsId": {
                    "name": "campaignOngoingCampaignsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "taskUserId": {
                    "name": "taskUserId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Tasks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ChatRoomAdmins": {
            "name": "ChatRoomAdmins",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "userID"
                    }
                },
                "chatRoom": {
                    "name": "chatRoom",
                    "isArray": false,
                    "type": {
                        "model": "ChatRoom"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "chatRoomID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ChatRoomAdmins",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "CampaignStatus": {
            "name": "CampaignStatus",
            "values": [
                "DRAFT",
                "SUBMITTED",
                "PUBLISHED",
                "ONGOING",
                "COMPLETED"
            ]
        },
        "PayoutType": {
            "name": "PayoutType",
            "values": [
                "BARTER",
                "VARIABLE",
                "FIXED",
                "CPA"
            ]
        },
        "Platform": {
            "name": "Platform",
            "values": [
                "YOUTUBE",
                "INSTAGRAM"
            ]
        },
        "Gender": {
            "name": "Gender",
            "values": [
                "MALE",
                "FEMALE",
                "OTHERS"
            ]
        },
        "JobStatus": {
            "name": "JobStatus",
            "values": [
                "SHORT_LISTED",
                "HIRED",
                "ONGOING",
                "COMPLETED",
                "REJECTED"
            ]
        },
        "PromotionGoals": {
            "name": "PromotionGoals",
            "values": [
                "PRODUCT_REVIEW",
                "PRODUCT_LAUNCH",
                "BRAND_AWARENESS",
                "APP_REVIEW",
                "PRODUCT_UNBOXING"
            ]
        },
        "DeliverableTypeYoutube": {
            "name": "DeliverableTypeYoutube",
            "values": [
                "DEDICATED_VIDEO",
                "INTEGRATED_VIDEO",
                "SHORT"
            ]
        },
        "DeliverableTypeInsta": {
            "name": "DeliverableTypeInsta",
            "values": [
                "REEL",
                "SWIPE_UP_STORY",
                "IGTV",
                "STATIC_POST",
                "VIDEO_POST",
                "CONTENT_ONLY"
            ]
        },
        "Category": {
            "name": "Category",
            "values": [
                "LIFESTYLE_VLOGGING",
                "PODCAST",
                "PRANKS",
                "BEAUTY",
                "SKINCARE",
                "HAIRCARE",
                "MAKEUP_COSMETICS",
                "FOOD",
                "HEALTHY_FOOD",
                "BUDGET_FOOD",
                "RESTAURANT_CAFE",
                "CHEF",
                "COOKING",
                "BAKING",
                "FINANCE",
                "CRYPTO",
                "STOCKS",
                "INVESTMENTS",
                "FINANCIAL_EDUCATION",
                "FINANCIAL_WELLNESS",
                "TECH_GADGET",
                "COMEDY",
                "HUMOUR_FUNNY",
                "STANDUP_COMEDIANS",
                "SKETCH_COMEDY",
                "SPORTS_GAMING",
                "VIDEO_GAMING",
                "BETTING",
                "OUTDOOR",
                "SPORTS",
                "EDUCATION",
                "GRADUATION_EXAMS",
                "ENGINEERING",
                "NON_ENGINEERING",
                "POST_GRADUATE_EXAMS",
                "CAT",
                "GATE",
                "GOVT_EXAMS",
                "UPSC",
                "BANKING",
                "FASHION",
                "MODELING",
                "BUDGET_FASHION",
                "LUXURY_GOODS",
                "PLUS_SIZE",
                "TRAVEL",
                "DOMESTIC",
                "INTERNATIONAL",
                "BIKER",
                "BUSINESS",
                "CAREERS",
                "MOTIVATION",
                "HEALTH_WELLNESS",
                "DOCTORS",
                "DIETITIANS",
                "YOGA",
                "FITNESS",
                "HEALTHY_LIFESTYLE",
                "GYMMING",
                "WEIGHT_LIFTING",
                "WEIGHT_LOSS",
                "ATHLETES",
                "TOY",
                "CHILDREN",
                "BABY",
                "WEDDING",
                "PET",
                "DOG",
                "OTHERS",
                "DECOR",
                "HOME_DECOR",
                "GARDEN_DECOR",
                "INTERIOR",
                "DESIGNERS",
                "ARCHITECTS",
                "REAL_ESTATE",
                "RELATIONSHIPS",
                "SCHOOL_STUDENTS",
                "COLLEGE_STUDENTS",
                "MOMMYS",
                "FATHERS",
                "DATING",
                "MARRIED_COUPLE",
                "AUTO",
                "CARS_BIKES",
                "COMMUNITIES",
                "LGBT",
                "ENTERTAINMENT",
                "PHOTOGRAPHY",
                "TELEVISION_FILM",
                "SONGS",
                "MUSIC",
                "ART_SKETCHING",
                "POETRY",
                "NEWS",
                "MEME"
            ]
        },
        "UserRole": {
            "name": "UserRole",
            "values": [
                "INFLUENCER",
                "TALENT_AGENCY",
                "BRAND",
                "MARKETING_AGENCY",
                "FREELANCE_MARKETER"
            ]
        },
        "PushNotificationService": {
            "name": "PushNotificationService",
            "values": [
                "APNS",
                "FCM",
                "BAIDU",
                "ADM"
            ]
        },
        "TaskStatus": {
            "name": "TaskStatus",
            "values": [
                "TOBECOMPLETED",
                "COMPLETED",
                "ONGOING"
            ]
        }
    },
    "nonModels": {
        "PayoutElement": {
            "name": "PayoutElement",
            "fields": {
                "payoutType": {
                    "name": "payoutType",
                    "isArray": false,
                    "type": {
                        "enum": "PayoutType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "maxMilestones": {
                    "name": "maxMilestones",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "FolloweRange": {
            "name": "FolloweRange",
            "fields": {
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "minFollowers": {
                    "name": "minFollowers",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "maxFollowers": {
                    "name": "maxFollowers",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "DeliveryMilestone": {
            "name": "DeliveryMilestone",
            "fields": {
                "milestoneTitle": {
                    "name": "milestoneTitle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "dueDate": {
                    "name": "dueDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "percentage": {
                    "name": "percentage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Deliverables": {
            "name": "Deliverables",
            "fields": {
                "deliverableType": {
                    "name": "deliverableType",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliverableType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "count": {
                    "name": "count",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliverableType": {
            "name": "DeliverableType",
            "fields": {
                "deliverableYoutube": {
                    "name": "deliverableYoutube",
                    "isArray": false,
                    "type": {
                        "enum": "DeliverableTypeYoutube"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deliverableInsta": {
                    "name": "deliverableInsta",
                    "isArray": false,
                    "type": {
                        "enum": "DeliverableTypeInsta"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PushNotificationDeviceToken": {
            "name": "PushNotificationDeviceToken",
            "fields": {
                "service": {
                    "name": "service",
                    "isArray": false,
                    "type": {
                        "enum": "PushNotificationService"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deviceTokens": {
                    "name": "deviceTokens",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CampaignSubmission": {
            "name": "CampaignSubmission",
            "fields": {
                "influencerId": {
                    "name": "influencerId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "milestones": {
                    "name": "milestones",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryMilestone"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "quizAnswer": {
                    "name": "quizAnswer",
                    "isArray": true,
                    "type": {
                        "nonModel": "QuizElement"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "JobStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "QuizElement": {
            "name": "QuizElement",
            "fields": {
                "question": {
                    "name": "question",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        }
    },
    "version": "c4cabf18b5c3f584fd3261a2966c803b"
};