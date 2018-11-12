const tokenJWT = require('../services/jwt.service');
const ServerError = require('../libs/errors');

module.exports = {

    checkSystem: (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (!token) {
            return next(new ServerError(401, 'No authorization token was found'));
        };
        let data = tokenJWT.verifyToken(token);
        if (data.role == 'system') {
            next();
        } else {
            return next(new ServerError(401, 'Token is Invalid'))
        }
    },

    checkUser: (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (!token) {
            return next(new ServerError(401, 'No authorization token was found'));
        };
        let data = tokenJWT.verifyToken(token);
        if (data.role == 'user') {
            req.currentUser = data; 
            next();
        } else {
            return next(new ServerError(401, 'Token is Invalid'))
        }
    },

    checkPWD: (req, res, next) => {
        if (req.headers['x-admin-password'] == process.env.ADMIN_PASSWORD) {
            next()
        } else {
            next(new ServerError(403, 'Password is not correct'))
        }
    }
}