var express = require('express');
var router = express.Router();
var app = express();

/*Get Cuban Engineer Pages*/
router.get('/', function(req, res, next) {
    res.render('ce_profile', { title: "CubanEngineer Profile" });
});

module.exports = router;
