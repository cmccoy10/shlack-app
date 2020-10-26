const router = require('express').Router();

const routes = [
  'users',
  'session',
  // 'endpoint3',
];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
