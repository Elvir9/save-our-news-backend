const express = require('express');
const router = express.Router();

let pkg = require('../../package');

/* GET returns app version. */
router.get('/', (req, res, next) => {
  res.send({
    version: pkg.version,
  });
});

module.exports = router;
