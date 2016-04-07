'use strict';
const passport = require('passport'),
    localUser = require('../models').LocalUser;

const passportConfig = function(app){

    app.use(passport.initialize());
    app.use(passport.session());

    /*passport.serializeUser(localUser.serializeUser());
    passport.deserializeUser(localUser.deserializeUser());
    passport.deserializeUser(function(user, done){
        done(null, user);
    });*/
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function(id, done) {
        localUser.findById(id, function(err, user) {
            done(err, user);
        });
    });

    require('./local')(app);
    require('./facebook')(app);
    require('./google')(app);
    require('./linkedIn')(app);
};

module.exports = passportConfig;
