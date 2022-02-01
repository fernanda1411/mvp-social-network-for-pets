const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostsFromUser,
  createPost,
  updatePost
} = require('../controllers/posts');

router
  .get('/', getAllPosts)
  .get('/:postId', getPostsFromUser)
  .post('/:userId', createPost)
  .put('/:userId', updatePost);

module.exports = router;
