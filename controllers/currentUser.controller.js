const userModel = require('../models/usersMongoose.model');

module.exports = {

	currentUser: (req, res, next) => {
		userModel.findById({_id: req.currentUser.userId}).lean().
		then(user => {
			if (!user) throw new ServerError(404, 'User not founded');
			res.json({user: user})
		})
		.catch(next);
	}
}