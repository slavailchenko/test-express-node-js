
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.route');
const adminRouter = require('./routes/admin.route');
const productsRouter = require('./routes/products.route');
const config = require('./config/app.config');
const log = require('./services/log.service');
const serviceToken = require('./services/jwt.service');
const ServerError = require('./libs/errors');
var mongoose = require('./libs/mongoose');

let app;

const start = () => new Promise ((res, rej) => {
	app = express ()
	
	app.use(bodyParser.json({limit: "50mb"}));
	app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
	
	app.use(log.logger);

	app.use('/system/users', usersRouter);
	app.use('/admin', adminRouter);
	app.use('/users', productsRouter);

	app.use(ServerError.handle404Error);
	app.use(ServerError.errorLogger);
	app.use(ServerError.errorHandler);

	app.listen(config.server.port, config.server.host, err => {
        if (err) {
        	console.log('Server creation error: ' + err);
            return;
        }
        console.log(`server started on ${config.server.host}:${config.server.port}`);
    });
    res();
});

mongoose.connect().then(start);

module.exports = app;