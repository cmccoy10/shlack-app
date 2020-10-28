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

async function editDM(details, id) {
  const message = await DirectMessage.findByPk(id);
  const { body } = details;
  message.body = body;
  const newMessage = await message.save();
  return newMessage;
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

async function editReply(details, id) {
  const { body } = details;
  const reply = await Reply.findByPk(id);
  reply.body = body;
  const newReply = await reply.save();
  return newReply;
}

module.exports = {
  getDirectMessage,
  getReplies,
  createDM,
  createReply,
  editDM,
  editReply
}
