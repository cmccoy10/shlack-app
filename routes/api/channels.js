const express = require('express');
const { Channel, ChannelMessage, User } = require("../../db/models");
const ChannelRepository = require('../../db/channel-repository');
const { asyncHandler } = require('../../utils');
const { validateChannel, validationResult } = require('../../validations');
const { authenticated } = require('./security-utils');
const router = express.Router();
const UserRepository = require("../../db/user-repository");

router.get("/:id", asyncHandler(async(req, res) => {
  const reqChannel = await ChannelRepository.findOne(req.params.id);
  const members = await ChannelRepository.findChannelMembers(req.params.id);
  const reqCount = await ChannelRepository.findMemberCount(req.params.id);
  const channel = {
    id: reqChannel.id,
    title: reqChannel.title,
    topic: reqChannel.topic,
    ownerId: reqChannel.ownerId,
    channelMembers: members,
    memberCount: reqCount
  }
  return res.status(200).json(channel);
}));

router.get("/:id/members", asyncHandler(async(req, res) => {
  const channelMembers = await ChannelRepository.findChannelMembers(req.params.id);
  return res.status(200).json(channelMembers);
}))

router.get("/:id/pins", asyncHandler(async(req, res) => {
  const channelPins = await ChannelRepository.findPins(req.params.id);
  return res.status(200).json(channelPins);
}))

router.post("/:id/join", authenticated, asyncHandler(async(req, res) => {
  const { userId, channelId } = req.body;
  const id = req.user.id;
  const channel = await ChannelRepository.findOne(channelId);
  if (channel.ownerId === id) {
    await ChannelRepository.joinChannel(userId, channelId);
    const channel = await ChannelRepository.findOne(channelId);
    return res.status(201).json(channel);
  } else {
    return res.status(401);
  }
}))

router.delete("/:id", authenticated, asyncHandler(async(req, res) => {
  const id = req.user.id;
  const channel = await ChannelRepository.findOne(req.params.id);
  if (channel.ownerId === id) {
    await ChannelRepository.deleteChannel(req.params.id);
    const newChannels = await UserRepository.findChannels(id);
    return res.status(200).json(newChannels);
  } else {
    return res.status(401);
  }

}))

router.post("/", authenticated, validateChannel, asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }
  const reqChannel = {
    title: req.body.title,
    topic: req.body.topic,
    ownerId: req.body.ownerId
  }
  const channel = await ChannelRepository.createChannel(reqChannel);
  return res.status(201).json(channel);
}));

router.put("/:id", authenticated, asyncHandler(async(req, res) => {
  const details = req.body;
  const id = req.user.id;
  const channel = await ChannelRepository.findOne(req.params.id);
  if (channel.ownerId === id) {
    await ChannelRepository.updateChannel(details, req.params.id);
    const newChannels = await UserRepository.findChannels(id);
    return res.status(200).json(newChannels);
  } else {
    return res.status(401);
  }

}))

router.post("/:id/messages", authenticated, asyncHandler(async(req, res) => {
  const details = req.body;
  const message = await ChannelRepository.createMessage(details, req.params.id);
  return res.status(201).json(message);
}))

router.get("/:id/messages", asyncHandler(async(req, res) => {
  const messages = await ChannelRepository.findOneMessages(req.params.id);
  return res.status(200).json(messages);
}))

router.put("/:id/messages/:messageId", authenticated, asyncHandler(async(req, res) => {
  const details = req.body;
  const message = await ChannelRepository.editMessage(details, req.params.messageId);
  const messageResponse = message;
  return res.status(200).json(messageResponse.ChannelMessages);
}))

router.post("/:channelId/messages/:messageId/replies", authenticated, asyncHandler(async(req, res) => {
  const details = req.body;
  const channelMessageId = req.params.messageId;
  const reply = await ChannelRepository.createReply(details, channelMessageId);
  return res.status(201).json(reply);
}))

router.put("/:id/messages/:messageId/replies/edit", authenticated, asyncHandler(async(req, res) => {
  const details = req.body;
  const reply = await ChannelRepository.editReply(details)
  return res.status(200).json(reply);
}))

router.get("/:id/messages/:messageId/replies", asyncHandler(async(req, res) => {
  const replies = await ChannelRepository.loadReplies(req.params.messageId);
  return res.status(200).json(replies);
}))


module.exports = router;
