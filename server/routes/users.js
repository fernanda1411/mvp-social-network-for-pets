const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUser,
  getUserFollowers,
  getUserFollowing,
  postUserFollow,
  postUserUnfollow
} = require('../controllers/users');

router
  .get('/', getAllUsers)
  .get('/:id', getUser)
  .get('/:id/followers', getUserFollowers)
  .get('/:id/following', getUserFollowing)
  .post('/:id/follow', postUserFollow)
  .post('/:id/unfollow', postUserUnfollow);

module.exports = router;