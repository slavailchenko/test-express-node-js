const userModel = require('../models/usersMongoose.model');
const ServerError = require('../libs/errors');

module.exports.add = data => userModel.create(data);

module.exports.getAllUsers = (query) => userModel.find(
	{ email: { $regex: query.toLowerCase().trim(),  $options: 'ig' }},
);

module.exports.getUserByPhone = phone => userModel.findOne({phone: phone}).lean();

module.exports.updateUser = (id, data) => userModel.update({_id: id}, data);

module.exports.someUpdateUser = (id, data) => userModel.update({_id: id}, {$set: data});

module.exports.removeUser = (id) => userModel.findByIdAndRemove({_id: id});