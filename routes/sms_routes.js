var express = require('express');
var router = express.Router();
var app = express();

/*get index page for sms*/
router.get('/', function(req, res, next) {
    res.render('sms/sms_index', { title: "Aleph SMS" });
});

module.exports = router;
