const jwt = require('express-jwt');
const config = require('../config/config');

const getTokenFromHeader = req => {
    if (
        (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
        (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
    ) {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};

const isAuth = jwt({
    secret: config.jwt.secret,
    algorithms: ['HS256'],
    userProperty: 'token',
    getToken: getTokenFromHeader,
});

module.exports = isAuth;