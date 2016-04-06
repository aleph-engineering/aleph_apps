'use strict';

const passport = require('passport'),
    facebookStrategy = require('passport-facebook').Strategy,
    profile = require('../models').Profile;

const facebookConfig = function(app){
    passport.use(new facebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID || "",
            clientSecret: process.env.FACEBOOK_APP_SECRET || "",
            callbackURL: "/auth/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            profile.findOne({ 'facebookUser.id': profile.id }, function (err, profile) {
                return done(err, profile);
            });
        }
    ));

    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('ce');
        });
};

module.exports = facebookConfig;
