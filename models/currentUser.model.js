const userModel = require('../models/usersMongoose.model');

module.exports.currentUser = (id) => {
    return userModel.findById({_id: id}).lean();
};