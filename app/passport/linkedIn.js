const passport = require('passport'),
    linkedinStrategy = require('passport-linkedin-oauth2').Strategy,
    userProfile = require('../models').UserProfile;

const linkedinConfig = function(app){
    passport.use(new linkedinStrategy({
            clientID: ( process.env.LINKEDIN_API_KEY || '123'),
            clientSecret: (process.env.LINKEDIN_SECRET_KEY || '123'),
            callbackURL: "http://localhost:3000/auth/linkedin/callback",
            scope: ['r_emailaddress', 'r_basicprofile'],
            state: true
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            //userProfile.findOne({ 'linkedInUser.id': profile._json.id })
            //    .then(function(done){
            //        if(data){ return done(null, data)}
            //        else {
            //            var new_profile = new userProfile({
            //                name : profile._json.displayName,
            //                'googleUser.id': profile._json.id
            //            });
            //            new_profile.save();
            //        }
            //    });
        }
    ));
    app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'login_state'}));

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('ce');
        });
};

module.exports = linkedinConfig;
