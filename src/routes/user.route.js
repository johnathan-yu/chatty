/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var mongoose = require('mongoose');
    var userModel = require('../models/user.model.js');
    var userController = require('../controllers/user.controller.js');
    
    var userRouter = function () {
        router.route('/user')
            .post(function (req, res) {
                userController.create(req, res);
                res.sent('create user');
            });
        return router;
    };
    
    module.exports = userRouter;
}());