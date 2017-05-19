var userModel = require('../models/user.model.js');

exports.create = function(req, res) {
    var user = new userModel({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email
    });

    user.save();
};