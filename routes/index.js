const express = require('express');
const router = express.Router();

const users = require ('../models/index');

	router.get('/', users.getUsers);

	router.get('/:id', users.getUserById);

	router.post('/addUser', users.addUser);

	router.put('/updateUser/:id/', users.updateUserById);

	router.patch('/editUser/:id/', users.editUserById);

	router.delete('/deleteUser/:id/', users.deleteUserById);

module.exports = router;