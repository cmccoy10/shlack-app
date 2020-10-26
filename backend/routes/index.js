const router = require('express').Router();

const routes = [
  // TODO: Modify placeholder endpoints to all server endpoints
  'endpoint1',
  'endpoint2',
  'endpoint3',
];

for (let route of routes) {
  router.use(`/api/${route}`, require(`./api/${route}`));
}

module.exports = router;
