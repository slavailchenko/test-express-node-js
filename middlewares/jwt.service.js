const jwt = require('jsonwebtoken');
const config = require('../config/app.config');

const ServerError = require('../libs/errors');

module.exports.generateToken = (data) => {

	let secret = 'secret-key';

	const token = jwt.sign({
		id: data.id,
		email: data.email, 
		role: data.role,
		version: config.auth.version, 
		dateTime: new Date()
	}, secret,
		{ expiresIn: config.auth.tokenExpirationTimeSec*1000 });

	console.log (token);
	return token;
};

module.exports.verifyToken = () => {
   
   const token = module.exports.generateToken({
	id: 0,
	firstName: "Slava",
	lastName: "Ilchenko",
	email: "slavailchenko@gmail.com",
	role: 'user',
	phone: "0677068573"
});
    let secret = 'secret-key';
    if (!token) {
        return next(new ServerError(401, 'No authorization token was found'));
    }

    const legit = jwt.verify(token, secret, { expiresIn: config.auth.tokenExpirationTimeSec*1000 });
	console.log (token);
	console.log("\nJWT verification result: " + JSON.stringify(legit));
	if (legit.version == config.auth.version)
		return legit
	else  {
		return next(new ServerError(401, 'Invalid auth token'))
	}   
};