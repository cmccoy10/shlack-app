const { validationResult, check } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => error.msg);

    const err = new Error('Bad Request');
    err.status = 400;
    err.title = 'Bad Request';
    err.errors = errors;

    next(err);
  }
  next();
};

// TODO: Custom Validations...

// Validators below are being used in users.js and session.js in routes/api
const validateEmailAndPassword = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
];

const validateUser = [
  check('username').exists({ checkFalsy: true }).withMessage('Please provide a username'),
  ...validateEmailAndPassword,
];

module.exports = {
  validationResult,
  handleValidationErrors,
  validateEmailAndPassword,
  validateUser,
};
