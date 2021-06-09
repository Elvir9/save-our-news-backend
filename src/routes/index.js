module.exports = () => {
  const express = require('express');
  const router = express.Router();

  router.use('/write', require('./posts'));
  router.use('/login', require('./login'));
  router.get('*', (req, res) => {
    res.status(404).json({ message: "API doesn't exists!" }).end();
  });
  return router;
};
