const express = require('express');
const router = express.Router();

const users = require ('../controllers/index');

	router.get('/users', users.getUsers);

	router.get('/users/:id', users.getUserById);

	router.post('/users', users.addUser);

	router.put('/users/:id', users.updateUserById);

	router.patch('/users/:id', users.editUserById);

	router.delete('/users/:id', users.deleteUserById);

module.exports = router;