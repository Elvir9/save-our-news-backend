const express = require('express');
const router = express.Router();
const ctrlPosts = require('../controllers/getPosts.controllers');

router.route('/').get(ctrlPosts.getPosts);
module.exports = router;
