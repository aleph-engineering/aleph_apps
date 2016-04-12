var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var flash = require('connect-flash');
/**
 * My Routes
 * @type {router|exports|module.exports}
 */
var routes = require('./routes/index');
var cubaneng = require('./routes/ce_routes');
var sms = require('./routes/sms_routes');
var apis = require('./routes/api_routes');
var toi_routes = require('./routes/toi_routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'ae.logo.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(session({
    secret: '4c86a73f-592b-4751-abf6-e334e752b540',
    cookie: {maxAge: 86400000},
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

/**
 * Mongoose Configurations
 * @type {connections|exports|module.exports}
 */
//var connections = require('./app/db');
//mongoose.connect(process.env.MONGOLAB_URI || connections.DEVELOPMENT_URL);

/**
 * Passport Configurations
 */
require('./app/passport')(app);

/**
 * Routes configurations
 */
app.use('/', routes);
app.use('/ce', cubaneng);
app.use('/sms', sms);
app.use('/api', apis);
app.use('/toi', toi_routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
