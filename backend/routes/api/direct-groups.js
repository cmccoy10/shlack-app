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

router.get("/:groupId/direct-messages/:id", asyncHandler(async(req, res) => {
  const directMessageReplies = await DirectGroupRepository.getReplies(req.params.id);
  return res.json(directMessageReplies);
}))

router.post("/:id/direct-messages", asyncHandler(async(req, res) => {
  const details = req.body;
  const directGroupId = req.params.id;
  const directMessage = await DirectGroupRepository.createDM(details, directGroupId);
  return res.json(directMessage);
}))

router.put("/:groupId/direct-messages/:id", asyncHandler(async(req, res) => {
  const details = req.body;
  const directMessage = await DirectGroupRepository.editDM(details, req.params.id);
  return res.json(directMessage);
}))

router.post("/:groupId/direct-messages/:dmId/replies", asyncHandler(async(req, res) => {
  const details = req.body;
  const directMessageId = req.params.dmId;
  const reply = await DirectGroupRepository.createReply(details, directMessageId);
  return res.json(reply);
}))

router.put("/:groupId/direct-messages/:dmId/replies/:id", asyncHandler(async(req, res) => {
  const details = req.body;
  const reply = await DirectGroupRepository.editReply(details, req.params.id);
  return res.json(reply);
}))

module.exports = router;
