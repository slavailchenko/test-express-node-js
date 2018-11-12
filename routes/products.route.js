const router = require('express').Router();

const userToken = require('../middlewares/user.token.middleware');
const products = require('../controllers/products.controller');
const currentUser = require('../controllers/currentUser.controller');

router.use('/', userToken.checkUser);

router.get('/products', products.getProducts);

router.get('/me', currentUser.currentUser);

module.exports = router;