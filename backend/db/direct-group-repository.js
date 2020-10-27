const { Channel, User, ChannelMember, ChannelMessage, Pin, DirectMessage, Reply } = require("./models");

async function getDirectMessage(directGroupId) {
  const directMessages = await DirectMessage.findAll({where: {directGroupId} });
  return directMessages;
}

async function getReplies(directMessageId) {
  const replies = await Reply.findAll({where: {directMessageId}});
  return replies;
}

async function createDM(details, directGroupId) {
  const { userId, body } = details;
  const directMessage = await DirectMessage.create({
    directGroupId,
    userId,
    body
  });
  return directMessage;
}

async function createReply(details, directMessageId) {
  const { userId, body } = details;
  const reply = await Reply.create({
    directMessageId,
    userId,
    body
  });
  return reply;
}

module.exports = {
  getDirectMessage,
  getReplies,
  createDM,
  createReply
}
