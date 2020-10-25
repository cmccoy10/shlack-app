# Shlack Data Schema

Users
-----

id PK int FK -< ChannelMembers.userId FK -< GroupMembers.userId FK -< DirectMessages.userId FK -< Replies.userId FK -< Reactions.userId

username varchar(20) UNIQUE
fullName varchar(30)
email varchar(40) UNIQUE
imgUrl varchar
hashedPassword varchar

ChannelMembers
--------------

id PK int
channelId int FK
userId int

Channels
--------

id PK int FK -< Pins.channelId FK -< ChannelMembers.channelId FK -< ChannelMessages.channelId
title varchar(40)
topic varchar(200)

ChannelMessages
---------------

id PK int FK -< Pins.channelMessageId FK -< Replies.channelMessageId FK -< Reactions.channelMessageId
channelId int FK
userId int FK
body varchar(500)
createdAt date

Pins
----

id PK int
channelId int FK
channelMessageId int FK

Reactions
---------

id PK int
channelMessageId int FK NULL
directMessageId int FK NULL
userId int FK
unicodeVal varchar

Replies
-------

id PK int
channelMessageId int FK NULL
directMessageId int FK NULL
userId int FK
body varchar(300)
createdAt date

GroupMembers
------------

id PK int
directGroupId int FK
userId int FK

DirectGroups
------------

id PK int FK -< GroupMembers.directGroupId FK -< DirectMessages.directGroupId

DirectMessages
--------------

id PK int FK -< Replies.directMessageId FK -< Reactions.directMessageId
directGroupId int FK
userId int FK
body varchar(500)
createdAt date
