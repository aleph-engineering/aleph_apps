'use strict';
const passport = require('passport'),
    localUser = require('../models').LocalUser;

const passportConfig = function(app){

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(localUser.serializeUser());
    passport.deserializeUser(localUser.deserializeUser());
    /*passport.serializeUser(function(user, done){
        done(null, user);
    });
    passport.deserializeUser(function(user, done){
        done(null, user);
    });*/

    require('./local')(app);
    require('./facebook')(app);
    require('./google')(app);
    require('./linkedIn')(app);
};

module.exports = passportConfig;
