const express = require('express');
const router = express.Router();

const users = require ('../controllers/users.controller');

	router.get('/', users.getUsers);

	router.get('/:id', users.getUserById);

	router.post('/', users.addUser);

	router.put('/:id', users.updateUserById);

	router.patch('/:id', users.editUserById);

	router.delete('/:id', users.deleteUserById);

module.exports = router;