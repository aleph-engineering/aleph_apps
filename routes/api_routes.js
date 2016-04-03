var express = require('express');
var router = express.Router();
var app = express();

router.get('/sendSMS', function(req, res, next){
    var number = req.query['number'];
    var body_message = req.query['message'];

    var client = require('twilio')('AC525c4929b17f0023e6067967a16232f0', '7a1cfcc80b4adc7634cf037b3dbcd930');

    client.sendSms({
        to: number,
        from: '+48799449177',
        body: body_message
    }, function(error, message) {
        if (!error) {
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);
            console.log('Message sent on:');
            console.log(message.dateCreated);
        } else {
            console.log('Oops! There was an error.'+ error.message);
        }
    });

});

module.exports = router;
