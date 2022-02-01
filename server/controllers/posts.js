const getAllPosts = function (req, res) {
  res.send(`get all posts`);
};

const getPostsFromUser = function (req, res) {
  res.send(`get posts from user ${req.params.postId}`);
};

const createPost = function (req, res) {
  res.send(`${req.params.userId} create a post ${req.body}`);
};

const updatePost = function (req, res) {
  res.send(`${req.params.userId} create a post ${req.body}`);
};

module.exports = {
  getAllPosts,
  getPostsFromUser,
  createPost,
  updatePost,
}