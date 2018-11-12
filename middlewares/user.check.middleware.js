const ServerError = require('../libs/errors');
const userModel = require ('../models/usersMongoose.model');

const fields = ['firstName', 'lastName', 'email', 'phone'];
const someFields = ['email', 'phone'];

module.exports = {

	checkUser: (req, res, next) => {
		userModel.findById({_id: req.params.id}).
		then(user => {
			console.log (user);
			if (!user) throw new ServerError(404, 'User not founded')
				else next();
			if (req.method == 'PUT') {
				fields.forEach (item => {
					if (!req.body[item]) throw new ServerError(403, `User cannot updated, field ${item} is null`);
				})
			};
			if (req.method == 'PATCH') {
				someFields.forEach (item => {
					if (!req.body[item]) throw new ServerError(403, `User cannot updated, field ${item} is null`);
				})
			}
		}).
		catch(next); 
	}
}