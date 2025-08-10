// User controller (logic only, no DB code)
const userQueries = require('../queries/userQueries');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userQueries.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await userQueries.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
