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

async function findOneMessages(channelId) {
  const messages = await ChannelMessage.findAll({where: {channelId}})
  return messages;
}

async function findMemberCount(channelId) {
  const memberCount = await ChannelMember.count({where: {channelId}})
  return memberCount;
}

async function findChannelMembers(channelId) {
  const members = await ChannelMember.findAll({where: {channelId}});
  return members;
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
  const { title, topic } = details;
  const channel = await Channel.findByPk(id);
  channel.title = title;
  channel.topic = topic;
  const updatedChannel = await channel.save();
  return updatedChannel;
}

async function createMessage(details, channelId) {
  const { userId, body } = details;
  const message = await ChannelMessage.create({
    channelId,
    userId,
    body
  })
  return message;
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
