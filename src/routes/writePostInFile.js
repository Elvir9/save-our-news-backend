const express = require('express');
const router = express.Router();
const ctrlWritePosts = require('../controllers/writePostsInFile.controllers');

router.route('/').post(ctrlWritePosts.writeFile);
module.exports = router;
