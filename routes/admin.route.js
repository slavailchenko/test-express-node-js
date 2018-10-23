const express = require('express');
const router = express.Router();

const password= require('../middlewares/user.token.middleware');
const admin = require('../controllers/admin.controller');

router.use('/', password.checkPWD);
router.get('/users/:userId/generate-token', admin.generateTokenUser);
router.get('/system/generate-token', admin.generateTokenSystem);

module.exports = router; 