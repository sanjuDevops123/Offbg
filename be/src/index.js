const express = require('express');
const logger = require('./config/logger');
const compress = require('compression');
const cors = require('cors');
const httpStatus = require('http-status');
const morgan = require('./config/morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
const config = require('./config/config');
const mongoose = require('mongoose');
const routes = require('./routes');
const session = require('express-session');

const app = global.app = express();
const server = require("http").createServer(app);
var util= require('util');
var encoder = new util.TextEncoder('utf-8');
const fileUpload = require('express-fileupload');

// parse body params and attache them to req.body
app.use(express.json());

app.use(compress());
app.use(fileUpload());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
  }));

  app.use(cookieParser());

app.use('', routes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = { message: 'API not found', status: httpStatus.NOT_FOUND };
    return next(err);
});

app.use((err, req, res, next) => {
    console.log(err);
    let { status, message } = err;
    if (config.env === 'production' && !err.isOperational) {
        status = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }

    res.locals.errorMessage = err.message;

    const response = {
        code: status,
        message,
    };

    if (config.env === 'development') {
        logger.error(err);
    }

    res.status(status).send(response);
});
(async () => {
  try {
      await server.listen(config.port);
      logger.info(`Listening to port ${config.port}`);
      await mongoose.connect(config.mongoose.url, config.mongoose.options);
      logger.info('Connected to MongoDB');
  } catch (error) {
      logger.error(error);
  }
})()