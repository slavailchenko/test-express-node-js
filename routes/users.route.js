const express = require('express');
const router = express.Router();

const users = require ('../controllers/users.controller');
const userToken = require('../middlewares/user.token.middleware');
const userCheck = require('../middlewares/user.check.middleware');

	router.use('/', userToken.checkSystem);

	router.use('/:id', userCheck.checkUser);
	
	router.get('/', users.getUsers);

	router.get('/:id', users.getUserById);

	router.post('/', users.addUser);

	router.put('/:id', users.updateUserById);

	router.patch('/:id', users.editUserById);

	router.delete('/:id', users.deleteUserById);

module.exports = router;