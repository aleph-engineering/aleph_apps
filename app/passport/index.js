'use strict';
const passport = require('passport'),
    LocalUser = require('../models').LocalUser;

const passportConfig = function(app){

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(LocalUser.serializeUser());
    passport.deserializeUser(LocalUser.deserializeUser());

    require('./local')(app);
    require('./facebook')(app);
};

module.exports = passportConfig;
