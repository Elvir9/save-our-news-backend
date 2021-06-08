module.exports = () => {
  const express = require('express');
  const router = express.Router();

  router.use('/write', require('./posts'));
  router.get('*', (req, res) => {
    res.status(404).json({ message: "API doesn't exists!" }).end();
  });
  return router;
};
