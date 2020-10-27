const { Channel, User, ChannelMember, ChannelMessage, Pin, sequelize } = require("./models");

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

async function deleteChannel(channelId) {
  await Channel.destroy(channelId);
  return;
}

async function joinChannel(userId, channelId) {
  await ChannelMember.create({
    channelId,
    userId
  })
}

module.exports = {
  createChannel,
  findOne,
  findOneMessages,
  findMemberCount,
  findChannelMembers,
  findPins,
  joinChannel,
  deleteChannel
}
