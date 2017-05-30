var userModel = require('../models/user.model.js');

exports.create = function (userData) {
    var promise = new Promise(function (resolve, reject) {
        var user = new userModel({
            firstName: userData.firstName,
            middleName: userData.middleName,
            lastName: userData.lastName,
            userName: userData.userName,
            email: userData.email,
            password: userData.password
        });

        user.save(function (err, user) {
            if (err) {
                reject(err);
            }

            resolve(user);
        });
    });
    return promise;
};