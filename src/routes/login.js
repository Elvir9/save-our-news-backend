const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controllers/login.controllers');

router.route('/').post(ctrlLogin.login);
module.exports = router;
