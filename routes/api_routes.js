'use strict';
var express = require('express');
var router = express.Router();

router.get('/sendSMS', function(req, res, next){
    var number = req.query['number'];
    var body_message = req.query['message'];

    var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    client.sendSms({
        to: number,
        body: body_message
    }, function(error, message) {
        if (!error) {
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);
            console.log('Message sent on:');
            console.log(message.dateCreated);
            res.status(202).send(true);
        } else {
            console.log('Oops! There was an error.'+ error.message);
            res.status(500).send(error.message);
        }
    });

});

module.exports = router;
