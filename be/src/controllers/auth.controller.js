const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, tokenService } = require('../services');
const config = require('../config/config');

const register = catchAsync(async (req, res) => {
    const user = await authService.createUser(req.body);
    console.log(user._id)
    const actions = ['User view'];
    const tokens = await tokenService.generateAuthTokens({ id: user._id.toString(), isAdmin: false });
    const name = user?.name;
    const id = user._id;
    res.send({ tokens, actions, name, id, isAdmin: false });
});

const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    let tokens = '';
    let actions = [];
    let name = '';
    let id;
    let isAdmin = false;
    if (email === config.admin.email && password === config.admin.password) {
        tokens = await tokenService.generateAuthTokens({ id: config.admin.email, isAdmin: true });
        name = 'Admin';
        isAdmin = true;
    } else {
        const user = await authService.loginUserWithEmailAndPassword(email, password);
        actions = user?.actions;
        tokens = await tokenService.generateAuthTokens({ id: user._id, isAdmin: false });
        name = user?.name;
        id = user._id;
    }
    res.send({ tokens, actions, name, id, isAdmin });
});


module.exports = {
    register,
    login
};