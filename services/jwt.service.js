const jwt = require('jsonwebtoken');
const config = require('../config/app.config');

const ServerError = require('../libs/errors');

let secret = 'secret-key';

module.exports.generateToken = (data) => {
	const dataAll = Object.assign (data, {
		date: new Date (),
		version: config.auth.version 
	});
	const token = jwt.sign(dataAll, secret,
		{ expiresIn: config.auth.tokenExpirationTimeSec});
	return token;
};

module.exports.verifyToken = (token) => {
	return jwt.verify(token, secret, (err, decoded) => {
			 if (err) {
			 	return new ServerError(401, 'Invalid auth token')
			 } else {
			 	console.log(decoded);
			 	return decoded;
			 }
			});
};