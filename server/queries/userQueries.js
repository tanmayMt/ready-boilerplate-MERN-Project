// All DB queries for User
const User = require('../models/User');

exports.getAllUsers = async () => {
  return await User.find();
};

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};
