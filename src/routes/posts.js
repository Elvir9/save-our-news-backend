const express = require('express');
const router = express.Router();
const ctrlPosts = require('../controllers/getPosts.controllers');
const { requireAuth } = require('../middleware/authMiddleware');

router.route('/').get(requireAuth, ctrlPosts.getPosts);
module.exports = router;
