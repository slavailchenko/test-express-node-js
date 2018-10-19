
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/index');
const config = require('./config/app.config');
const app = express();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use('/', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(config.server.port, config.server.host, err => {
        if (err) {
            console.log('Server creation error: ' + err);
            return;
        }
        console.log(`server started on ${config.server.host}:${config.server.port}`);
});