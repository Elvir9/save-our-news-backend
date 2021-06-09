const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controllers/auth.controllers');

router.route('/').post(ctrlLogin.login);
module.exports = router;
