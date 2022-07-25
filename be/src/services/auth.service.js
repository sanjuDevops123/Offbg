const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { User } = require('../models');

const loginUserWithEmailAndPassword = async (email, password) => {
    const user = await User.findOne({ email });
    if (user) {
        if (await user.isPasswordMatch(password)) {
            return {
                _id: user?._id,
                actions: ['User view'],
                name: user?.name
            };
        }
    }
    throw new ApiError(httpStatus.BAD_REQUEST, 'Incorrect email or password');
};

const createUser = async (userBody) => {
    if (await User.isEmailTaken(userBody.email)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    return await User.create(userBody);
  };

module.exports = {
    loginUserWithEmailAndPassword,
    createUser
};