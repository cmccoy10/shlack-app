const { Channel, User, ChannelMember, ChannelMessage, Pin, Reply} = require("./models");

async function createChannel(details) {
  const channel = await Channel.create(details);
  const { ownerId } = details
  await ChannelMember.create({
    channelId: channel.id,
    userId: ownerId
  })
  return channel;
}

async function findOne(id) {
  const channel = await Channel.findByPk(id)
  return channel;
}

async function findOneMessages(id) {
  const channel = await Channel.findByPk(id, {include: {model: ChannelMessage, include: {model: User}}})
  const channelMessages = channel.ChannelMessages.map(message => {
    return {
      id: message.id,
      channelId: message.channelId,
      userId: message.userId,
      body: message.body,
      createdAt: message.createdAt,
      updatedAt: message.updatedAt,
      username: message.User.username,
      fullName: message.User.fullName,
      imgUrl: message.User.imgUrl
    }
  })
  const channelResponse = {
    id: channel.id,
    title: channel.title,
    topic: channel.topic,
    ownerId: channel.ownerId,
    createdAt: channel.createdAt,
    updatedAt: channel.updatedAt,
    ChannelMessages: channelMessages
  };
  return channelResponse;
}

async function findMemberCount(channelId) {
  const memberCount = await ChannelMember.count({where: {channelId}})
  return memberCount;
}

async function findChannelMembers(channelId) {
  const members = await ChannelMember.findAll({where: {channelId}, include: {model: User}});
  const channelMembers = members.map(member => {
    return member.User;
  })

  return channelMembers;
}

async function findPins(channelId) {
  const pins = await Pin.findAndCountAll({where: {channelId}})
  return pins;
}

async function deleteChannel(id) {
  const channel = await Channel.findByPk(id)
  await channel.destroy();
  return;
}

async function joinChannel(userId, channelId) {
  await ChannelMember.create({
    channelId,
    userId
  })
}

async function updateChannel(details, id) {
  console.log("Details", details)
  const { title, topic } = details;
  const channel = await Channel.findByPk(id);
  channel.title = title;
  channel.topic = topic;
  const updatedChannel = await channel.save();
  console.log("Updated Channel", updatedChannel)
  return updatedChannel;
}

async function createMessage(details, channelId) {
  const { userId, body } = details;
  const message = await ChannelMessage.create({
    channelId,
    userId,
    body
  })
  const id = message.id;
  const messageWithUser = await ChannelMessage.findByPk(id, {include: [User]})
  const messageToSend = {
    id: messageWithUser.id,
    channelId: messageWithUser.channelId,
    userId: messageWithUser.userId,
    body: messageWithUser.body,
    createdAt: messageWithUser.createdAt,
    updatedAt: messageWithUser.updatedAt,
    username: messageWithUser.User.username,
    fullName: messageWithUser.User.fullName,
    imgUrl: messageWithUser.User.imgUrl
  }
  return messageToSend;
}

async function editMessage(details, id) {
  const message = await ChannelMessage.findByPk(id);
  const { body } = details;
  message.body = body;
  const newMessage = await message.save();
  return newMessage;
}

async function loadReplies(channelMessageId) {
  const replies = await Reply.findAll({where: {channelMessageId}});
  return replies;
}

async function createReply(details, channelMessageId) {
  const { userId, body } = details;
  const reply = await Reply.create({
    channelMessageId,
    userId,
    body
  });
  return reply;
}

async function editReply(details) {
  const { id, body } = details;
  const reply = await Reply.findByPk(id);
  reply.body = body;
  const newReply = await reply.save();
  return newReply;
}

module.exports = {
  createChannel,
  findOne,
  findOneMessages,
  findMemberCount,
  findChannelMembers,
  findPins,
  joinChannel,
  deleteChannel,
  updateChannel,
  createMessage,
  editMessage,
  loadReplies,
  createReply,
  editReply
}
