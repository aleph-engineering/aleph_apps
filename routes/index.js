'use strict';
var express = require('express');
var router = express.Router();
var LocalUser = require('../app/models');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: "[ae] Apps", user : req.user, message : req.flash('error')});
});
router.get('/login', function(req, res, next) {
    res.render('login', { user : req.user, message : req.flash('error')});
});
router.get('/register', function(req, res, next) {
    res.render('register', { title: "[ae] Apps"});
});
module.exports = router;
