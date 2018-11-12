const router = require('express').Router();

const users = require ('../controllers/users.controller');
const userToken = require('../middlewares/user.token.middleware');
const userCheck = require('../middlewares/user.check.middleware');

	router.use('/', userToken.checkSystem);

	router.use('/:id', userCheck.checkUser);

	router.get('/', users.getAllUsers);

	router.get('/phone/:phone', users.getUserByPhone);

	// router.get('/:id', users.getUserById);

	router.post('/', users.newUser);

	router.put('/:id', users.updateUser);

	router.patch('/:id', users.someUpdateUser);

	router.delete('/:id', users.removeUser);

module.exports = router;