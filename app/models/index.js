'use strict';

const mongoose = require('mongoose'), Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const LocalUserSchema = new Schema({
    username    : { type: String },
    password    : { type: String, set: setHash },
    name        : { type: String },
    email       : { type: String },
    reg_date    : { type: Date, default: new Date()}
});
LocalUserSchema.verifyPassword = function(password){
    bcrypt.compare(password, LocalUserSchema.password, function(err, res) {
        return res;
    });
};

const GoogleUserSchemma = new Schema({
    username    : { type: String },
    email       : { type: String }
});

const FacebookUserSchemma = new Schema({
    username    : { type: String },
    email       : { type: String }
});

const LinkedInUserSchemma = new Schema({
    username    : { type: String },
    email       : { type: String }
});

const CommentSchema = new Schema({
    author       : { type: String },
    name         : { type: String },
    email        : { type: String },
    creationDate : { type: Date, default: new Date()}
});

const FeedSchema = new Schema({
    author       : { type: String },
    number       : { type : Number},
    creationDate : { type: Date, default: new Date()},
    ups          : { type : Number},
    downs        : { type : Number},
    comments     : [CommentSchema]
});
const ProfileSchema = new Schema({
    userId          : { type: String},
    availableVotes  : { type: Number},
    feed            : [FeedSchema],
    localId         : LocalUserSchema,
    googleId        : GoogleUserSchemma,
    facebookId      : FacebookUserSchemma,
    linkedInId      : LinkedInUserSchemma
});

const CrashLogSchema = new Schema({
    date            : { type: Date, default: new Date()},
    text            : { type: String }
});

function setHash(password){
    bcrypt.hash(password, 10, function(err, hash) {
        return hash;
    });
}

module.exports = {
    LocalUser: mongoose.model('localUser', LocalUserSchema),
    GoogleUser: mongoose.model('googleUser', GoogleUserSchemma),
    FacebookUser: mongoose.model('facebookUser', FacebookUserSchemma),
    LinkedInUser: mongoose.model('linkedInUser', LinkedInUserSchemma),
    Profile: mongoose.model('profile', ProfileSchema),
    Feed: mongoose.model('feed', FeedSchema),
    Comment: mongoose.model('comment', CommentSchema),
    CrashLog : mongoose.model('crashLog', CrashLogSchema)
};
