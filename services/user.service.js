const userModel = require('../models/usersMongoose.model');
const ServerError = require('../libs/errors');
// const config = require('../config/app.config');

module.exports.add = data => userModel.create(data);

module.exports.getAllUsers = () => userModel.find({});

module.exports.getUserByEmail = email => userModel.findOne({email: email}).lean();

module.exports.updateUser = (id, data) => userModel.update({_id: id}, data);

module.exports.removeUser = (id) => userModel.findByIdAndRemove({_id: id});