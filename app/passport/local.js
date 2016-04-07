'use strict';
const passport = require('passport'),
    LocalUser = require('../models').LocalUser;

const localConfig = function(app){

    passport.use(LocalUser.createStrategy());

    app.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function(req, res, next) {
        req.session.save(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('toi');
        });
    });

    app.post('/register', function(req, res, next) {
        LocalUser.register(new LocalUser({ username : req.body.username }), req.body.password, function(err, account) {
            if (err) {
                console.log(err);
                return res.render("register", {info: "Sorry. That username already exists. Try again."});
            }

            passport.authenticate('local')(req, res, function () {
                req.session.save(function (err) {
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    res.redirect('/');
                });
            });
        });
    });
};

module.exports = localConfig;
