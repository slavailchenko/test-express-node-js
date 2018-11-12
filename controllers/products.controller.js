const ServerError = require('../libs/errors');
const products = require('../models/products.model');

module.exports = {

	getProducts: (req, res, next) => {
		let data = products.getProducts(req.query);
		if(!(data.length)) {
			next(new ServerError(404, 'Product not found'))
		} else {
			res.json(data)
		}
	}
}