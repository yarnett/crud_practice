const User = require('../models/userModel');

const userController = {};

userController.createUser = async(req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    console.log('New User', NewUser);
    res.locals.newUser = newUser;
    return next();
  } catch(error) {
    console.log('error in create user', error);
    return next();
  }
};

module.exports = userController;