const modelUsers = require ('../models/index');
const ServerError = require('../libs/errors');
const log = require('../services/log.service');

module.exports.getUsers =  (req, res, next) => {

let data = modelUsers.getUsers(req.query);

    if (!data.length) {
      return next (new ServerError(404, 'Users was not found with such params'));
        }
       else res.json(data);
    
};


module.exports.getUserById =  (req, res, next) => {
	let data = modelUsers.getUserById(req.params.id);

  if(!data) {
    return next (new ServerError(404, 'User not found', 'Users was not found with such params'));
        // return next(404, 'User was not found with such id')
    } else {
        res.json(data);
    }
};

module.exports.addUser =  (req, res, next) => {

 let data = modelUsers.addUser(req.body);

	  if((!req.body.firstName) || 
       (!req.body.lastName)|| 
       (!req.body.email) || 
       (!req.body.phone)) {
          
          return next (new ServerError(403, 'Data is invalid'));

    } else {

       res.json(data);
    }
};

module.exports.updateUserById =  (req, res, next) => {

   if((!req.body.firstName) || 
       (!req.body.lastName)|| 
       (!req.body.email) || 
       (!req.body.phone)) {
        return next (new ServerError(403, 'Data is invalid'));
    } else {
        let data = modelUsers.updateUserById(req.params.id, req.body);
        res.json(data);
    }
};

module.exports.editUserById =  (req, res, next) => {

    if((!req.body.email) || 
       (!req.body.phone)) {
        return next (new ServerError(403, 'Data is invalid'));
    } else {
    let data = modelUsers.editUserById(req.params.id, req.body);
    res.json(data);
  }
};

module.exports.deleteUserById =  (req, res, next) => {
	let id = req.params.id;
  let data = modelUsers.deleteUserById(id);

    if(data == -1) {
       return next(new ServerError(404, `User with id ${id} not found`));
    } else {
        res.json(`User with id ${id} is deleted`)
    }
};