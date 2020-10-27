const express = require('express');

const DirectGroupRepository = require('../../db/direct-group-repository');
const { asyncHandler } = require('../../utils');
const { validateChannel, validationResult } = require('../../validations');
const { authenticated } = require('./security-utils');
const router = express.Router();

router.get("/:id", asyncHandler(async(req, res) => {
  const directMessages = await DirectGroupRepository.getDirectMessage(req.params.id);
  return res.json(directMessages);
}))

router.get("/:groupid/direct-messages/:id", asyncHandler(async(req, res) => {
  const directMessageReplies = await DirectGroupRepository.getReplies(req.params.id);
  return res.json(directMessageReplies);
}))

router.post("/:id/direct-messages", asyncHandler(async(req, res) => {
  const details = req.body;
  const directGroupId = req.params.id;
  const directMessage = await DirectGroupRepository.createDM(details, directGroupId);
  res.json(directMessage);
}))

//TODO add route to PUT(edit) a DM

router.post("/:groupId/direct-messages/:dmId/reply", asyncHandler(async(req, res) => {
  const details = req.body;
  const directMessageId = req.params.dmId;
  const reply = await DirectGroupRepository.createReply(details, directMessageId);
  res.json(reply);
}))

//TODO add route to PUT(edit) a Reply

module.exports = router;
