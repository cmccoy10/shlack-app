const express = require('express');
const { User } = require("../../db/models");
const UserRepository = require('../../db/user-repository');
const { asyncHandler } = require('../../utils');
const { authenticated, generateToken } = require('./security-utils');
const {
  handleValidationErrors,
  validateUser,
  validationResult,
} = require('../../validations');

const router = express.Router();

router.get(
  '/',
  authenticated, asyncHandler(async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
  })
);

router.get("/:id", authenticated, asyncHandler(async(req, res) => {
  const user = await UserRepository.findOne(req.params.id);
  res.status(200).json(user);
}))

router.get("/:id/channels", authenticated, asyncHandler(async(req, res) => {
  try {
      const channels = await UserRepository.findChannels(req.params.id);
      res.status(200).json(channels)
  } catch (e) {
        return res.status(401).json("Unauthorized")
  }

}))

router.get("/:id/direct-groups", asyncHandler(async(req, res) => {
  const directGroups = await UserRepository.findGroups(req.params.id)
  res.status(200).json(directGroups);
}))

router.post(
  '/',
  validateUser,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }

    const reqUser = {
      username: req.body.username,
      fullName: req.body.fullName,
      email: req.body.email,
      imgUrl: req.body.imgUrl,
      password: req.body.password,
      tokenId: ''
    }

    const user = await UserRepository.create(reqUser);

    const { jti, token } = generateToken(user);
    user.tokenId = jti;
    await user.save();
    res.status(200).json({ token, user: user.toSafeObject(), username: user.username, imgUrl: user.imgUrl });
  })
);

//* Make note that I'm not sure what this is doing
router.get('/me', authenticated, (req, res) => {
  res.json({
    email: req.user.email,
    name: req.user.name,
  });
});

module.exports = router;
