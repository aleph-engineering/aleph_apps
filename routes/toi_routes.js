'use strict';
var express = require('express');
var router = express.Router();
var LocalUser = require('../app/models').LocalUser;

router.get('/', function(req,res,next){

    res.render('toi/room', {user: req.user});
});

module.exports = router;

