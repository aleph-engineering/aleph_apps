'use strict';
var express = require('express');
var router = express.Router();
var session = require('express-session');
var LocalUser = require('../app/models').LocalUser;

router.get('/', function(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user);
        console.log('---------------------------');
        console.log(session.Cookie);
    }
    res.render('toi/room', {user: req.user});
});

module.exports = router;

