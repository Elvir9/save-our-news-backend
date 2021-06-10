module.exports = () => {
  const express = require('express');
  const router = express.Router();

  router.use('/status', require('./status'));
  router.use('/write', require('./writePostInFile'));
  router.use('/get-posts', require('./posts'));
  router.use('/login', require('./login'));
  router.get('*', (req, res) => {
    res.status(404).json({ message: "API doesn't exists!" }).end();
  });
  return router;
};
