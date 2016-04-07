'use strict';
const userProfile = require('../models').UserProfile;

module.exports = {
    checkProfileExist: function(email, callback){
        if (typeof callback === "function") {
            userProfile.findOne({$or: [{'googleUser.email': email}, {'facebookUser.email': email}, {'linkedInUser.email': email}, {'gitHubUser.email': email}, {'localUser.email': email}]},
                function (error, model) {
                    callback(error,model);
                });
        }
    }
};
