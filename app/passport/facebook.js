'use strict';

const passport = require('passport'),
    facebookStrategy = require('passport-facebook').Strategy,
    userProfile = require('../models').UserProfile,
    facebookUser = require('../models').FacebookUser,
    userController = require('../controllers/userProfile');

const facebookConfig = function(app){
    passport.use(new facebookStrategy({
            clientID: (process.env.FACEBOOK_APP_ID || "123"),
            clientSecret: (process.env.FACEBOOK_APP_SECRET || "123"),
            callbackURL: "/auth/facebook/callback",
            profileFields: ['id','displayName', 'picture', 'gender' ,'email'],
            enableProof: true
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            console.log(profile._json.picture);
            userProfile.findOne({ 'facebookUser.id': profile._json.id })
                .then(function(user){
                    if(user){
                        return done(null, user);
                    }
                    else {
                        var newFacebookUser = new facebookUser({
                            id : profile._json.id,
                            name : profile._json.name,
                            email: profile._json.email,
                            gender: profile._json.gender,
                            avatar: profile._json.picture.data.url
                        });

                        userController.checkProfileExist(profile._json.email,function(error,model){
                            if(error) { return done(null, null) }
                            if(model){
                                model.facebookUser = newFacebookUser;
                                model.save(function(err){
                                    if(!err) return done(null, model);
                                    else{
                                        console.log(err);}
                                });
                            }
                            else{
                                var newProfile = new userProfile({
                                    name : profile._json.displayName
                                });
                                newProfile.facebookUser = newFacebookUser;
                                newProfile.save(function(err){
                                    if (!err) return done(null, newProfile);
                                    else {
                                        console.log(err);}
                                });
                            }
                        });
                    }
                });
        }
    ));

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email']}));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/ce');
        });
};

module.exports = facebookConfig;
