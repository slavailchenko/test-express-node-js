
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.route');
const config = require('./config/app.config');
const log = require('./services/log.service');
const serviceToken = require('./middlewares/jwt.service');
const ServerError = require('./libs/errors');

const app = express();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(log.logger);
app.use('/users', usersRouter);

app.use(ServerError.handle404Error);
app.use(ServerError.errorLogger);
app.use(ServerError.errorHandler);

// serviceToken.verifyToken ();

app.listen(config.server.port, config.server.host, err => {
        if (err) {
        	console.log('Server creation error: ' + err);
            return;
        }
        console.log(`server started on ${config.server.host}:${config.server.port}`);
});