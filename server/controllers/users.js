const getAllUsers = function (req, res) {
  res.send(`get all user`);
};

const getUser = function (req, res) {
  res.send(`get user ${req.params.id}`);
};

const getUserFollowers = function (req, res) {
  res.send(`get user ${req.params.id} followers`);
};

const getUserFollowing = function (req, res) {
  res.send(`get user ${req.params.id} following`);
};

const postUserFollow = function (req, res) {
  res.send(`user ${req.params.id} follow ${req.body.userId}`);
};

const postUserUnfollow = function (req, res) {
  res.send(`user ${req.params.id} unfollow ${req.body.userId}`);
};

module.exports = {
  getAllUsers,
  getUser,
  getUserFollowers,
  getUserFollowing,
  postUserFollow,
  postUserUnfollow
}