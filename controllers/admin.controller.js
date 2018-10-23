const tokenJWT = require('../services/jwt.service');

module.exports.generateTokenUser = (req, res, next) => {

    let data = Object.assign ({}, {userId: req.params.userId,
    	role: 'user'});

    const token = tokenJWT.generateToken(data);
    res.json({token: token});
};

module.exports.generateTokenSystem = (req, res, next) => {
    
    let data = Object.assign ({}, {role: 'system'});

    const token = tokenJWT.generateToken(data);
    res.json({token: token});
};