const _ = require('lodash');

const modelUsers = require ('../models/users.model');
const user = require ('../models/usersMongoose.model')
const ServerError = require('../libs/errors');
const log = require('../services/log.service');
const userService = require('../services/user.service')

module.exports.getUsers =  (req, res, next) => {
  let data = modelUsers.getUsers(req.query);
  if (!data.length) {
    return next (new ServerError(404, 'Users was not found with such params'));
  } else res.json(data);
};

module.exports.getUserById =  (req, res, next) => {
  let data = modelUsers.getUserById(req.params.id);
  res.json(data);
};

module.exports.addUser =  (req, res, next) => {

  try {
    let data = modelUsers.addUser(req.body);
    if (data == false) return next (new ServerError(403, 'Data is invalid'))
      else res.json(data);
  } catch (err) {
    return next (new ServerError(403, err));
  }

};

module.exports.updateUserById =  (req, res, next) => {

 try {
  let data = modelUsers.updateUserById(req.params.id, req.body);
    if(data == false) {
      return next (new ServerError(403, 'Data is invalid'));
    } else {
        res.json(data);
    }
  } catch (err) {
    return next (new ServerError(403, err));
  }
  
};

module.exports.editUserById =  (req, res, next) => {

 try {
  let data = modelUsers.editUserById(req.params.id, req.body);
    if(data == false) {
      return next (new ServerError(403, 'Data is invalid'));
    } else {
        res.json(data);
    }
  } catch (err) {
    return next (new ServerError(403, err));
  }

};

module.exports.deleteUserById = (req, res, next) => {
	let id = req.params.id;
  let data = modelUsers.deleteUserById(id);

    if(data == -1) {
      return next(new ServerError(404, `User with id ${id} not found`));
    } else {
      res.json(`User with id ${id} is deleted`)
    }
};

// mongoose

module.exports.newUser = (req, res, next) => {
    const data = req.body;
    userService.add(data)
        .then(userSaved => res.json({user: userSaved}))
        .catch(next);
}

module.exports.getAllUsers = (req, res, next) => {
  userService.getAllUsers().
        then (users => res.json(users)).
        catch (next);
}

module.exports.getUserByEmail = (req, res, next) => {
    const data = req.query.email;
    userService.getUserByEmail(data)
        .then(user => res.json({user: user}))
        .catch(next);
}

module.exports.updateUser = (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    userService.updateUser(id, data).
        then(user => res.json({user: user})).
        catch(next);
}

module.exports.removeUser = (req, res, next) => {
    const id = req.params.id;
    userService.removeUser(id).
        then(user => res.json(`User with ${id} deleted`)).
        catch(next);
}