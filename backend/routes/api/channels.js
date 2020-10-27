const express = require('express');

const ChannelRepository = require('../../db/channel-repository');
const { asyncHandler } = require('../../utils');
const { validateChannel, validationResult } = require('../../validations');
const { authenticated } = require('./security-utils');
const router = express.Router();

router.get("/:id", asyncHandler(async(req, res) => {
  const reqChannel = await ChannelRepository.findOne(req.params.id);
  const reqMessages = await ChannelRepository.findOneMessages(req.params.id);
  const reqCount = await ChannelRepository.findMemberCount(req.params.id);
  const channel = {
    id: reqChannel.id,
    title: reqChannel.title,
    topic: reqChannel.topic,
    ownerId: reqChannel.ownerId,
    channelMessages: reqMessages,
    memberCount: reqCount
  }
  console.log(channel);
  return res.json(channel);
}));

router.get("/:id/members", asyncHandler(async(req, res) => {
  const channelMembers = await ChannelRepository.findChannelMembers(req.params.id);
  return res.json(channelMembers);
}))

router.get("/:id/pins", asyncHandler(async(req, res) => {
  const channelPins = await ChannelRepository.findPins(req.params.id);
  return res.json(channelPins);
}))

router.post("/:id/join", authenticated, asyncHandler(async(req, res) => {
  const channelId = req.params.id;
  const { userId } = req.body;
  await ChannelRepository.joinChannel(userId, channelId);
  const channel = await ChannelRepository.findOne(channelId);
  return res.json(channel);
}))

// TODO ---> Finish channel delete route
router.delete("/channels/:id", asyncHandler(async(req, res) => {
  await ChannelRepository.deleteChannel(req.params.id);
  return;
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
  return res.json(channel);
}));

module.exports = router;
