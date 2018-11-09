// const ServerError = require('../libs/errors');
// const modelUsers = require ('../models/users.model');

// module.exports.checkUser = (req, res, next) => {
// 	let id = modelUsers.getUserById (req.params.id);
// 	console.log (id);
// 	if (!id) {
// 		return next(new ServerError(404, 'User not founded'));
// 	} else {
// 		next();
// 	}
// }