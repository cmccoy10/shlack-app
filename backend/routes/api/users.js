const express = require('express');

const { User } = require('../../db/models');
const { asyncHandler } = require('../../utils');
const { handleValidationErrors, validateUser } = require('../../validations');
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

router.get(
  '/',
  validateUser,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  })
);

router.post(
  '/',
  validateUser,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }

    const user = await User.create(req.body);

    const { jti, token } = generateToken(user);
    user.tokenId = jti;
    await user.save();
    res.json({ token, user: user.toSafeObject() });
    })
);

router.get('/me', authenticated, (req, res) => {
  res.json({
    email: req.user.email,
    name: req.user.name,
  });
});

module.exports = router;
