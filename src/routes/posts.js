const express = require('express');
const router = express.Router();
const ctrlPosts = require('../controllers/posts.controllers');

router.route('/').post(ctrlPosts.writeFile);
module.exports = router;
