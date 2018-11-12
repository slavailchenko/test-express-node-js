const user = require ('../models/usersMongoose.model')
const ServerError = require('../libs/errors');
const log = require('../services/log.service');
const userModel = require('../models/usersMongoose.model');

module.exports = {
  
  newUser: (req, res, next) => {
    userModel.create(req.body).
    then(userSaved => res.json({user: userSaved})).
    catch(next);
  },

  getAllUsers: (req, res, next) => {
    const query = req.query.email || '';
    userModel.find({ email: { $regex: query.toLowerCase().trim(),  $options: 'ig' }}).
    then(users => {
      if (!users.length) throw new ServerError(404, 'Users not founded');
      res.json(users);
    })
    .catch(next);
  },

  getUserByPhone: (req, res, next) => {
    userModel.findOne({phone: req.params.phone}).lean().
    then(user => {
      if (!user) throw new ServerError(404, 'User not founded');
      res.json({user: user})
    })
    .catch(next);
  },

  getUserById: (req, res, next) => {
    userModel.findOne({_id: req.params.id}).lean().
    then(user => {
      let d = userModel.getFullName();
      console.log(d);
    }).
    then(d => res.json({user: d})).
    catch(next);
  },

  updateUser: (req, res, next) => {
    userModel.update({_id: req.params.id}, req.body).
    then(user => {
      res.json(`User with id=${req.params.id} updated`);
    }).
    catch(next);
  },

  someUpdateUser: (req, res, next) => {
    userModel.update({_id: req.params.id}, {$set: req.body}).
    then(user => {
      res.json(`User with id=${req.params.id} updated`);
    }).
    catch(next);
  },

  removeUser: (req, res, next) => {
    userModel.findByIdAndRemove({_id: req.params.id}).
    then(user => {
      res.json(`User with id=${req.params.id} deleted`);
    }).
    catch(next);
  }
}

// module.exports.getUsers =  (req, res, next) => {
//   let data = modelUsers.getUsers(req.query);
//   if (!data.length) {
//     return next (new ServerError(404, 'Users was not found with such params'));
//   } else res.json(data);
// };

// module.exports.getUserById =  (req, res, next) => {
//   let data = modelUsers.getUserById(req.params.id);
//   res.json(data);
// };

// module.exports.addUser =  (req, res, next) => {

//   try {
//     let data = modelUsers.addUser(req.body);
//     if (data == false) return next (new ServerError(403, 'Data is invalid'))
//       else res.json(data);
//   } catch (err) {
//     return next (new ServerError(403, err));
//   }

// };

// module.exports.updateUserById =  (req, res, next) => {

//  try {
//   let data = modelUsers.updateUserById(req.params.id, req.body);
//     if(data == false) {
//       return next (new ServerError(403, 'Data is invalid'));
//     } else {
//         res.json(data);
//     }
//   } catch (err) {
//     return next (new ServerError(403, err));
//   }
  
// };

// module.exports.editUserById =  (req, res, next) => {

//  try {
//   let data = modelUsers.editUserById(req.params.id, req.body);
//     if(data == false) {
//       return next (new ServerError(403, 'Data is invalid'));
//     } else {
//         res.json(data);
//     }
//   } catch (err) {
//     return next (new ServerError(403, err));
//   }

// };

// module.exports.deleteUserById = (req, res, next) => {
//   let id = req.params.id;
//   let data = modelUsers.deleteUserById(id);

//     if(data == -1) {
//       return next(new ServerError(404, `User with id ${id} not found`));
//     } else {
//       res.json(`User with id ${id} is deleted`)
//     }
// };