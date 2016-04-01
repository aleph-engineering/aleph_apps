var express = require('express');
var router = express.Router();
var app = express();

/*Get Cuban Engineer Pages*/
router.get('/', function(req, res, next) {
    res.render('ce_profile', { title: "CubanEngineer Profile" });
});

/* -- Home page -- */
router.get('/home', function(req, res, next) {
    res.render('ce_home', { title: "CubanEngineer Home page" });
});

router.get('/users', function(req, res, next) {
    res.render('ce_users', { title: "CubanEngineer Home page" });
});

module.exports = router;
