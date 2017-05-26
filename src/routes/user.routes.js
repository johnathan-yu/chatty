/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var userController = require('../controllers/user.controller.js');

    router.get('/', function (req, res) {
        res.status(200).json('GET for user is called.').end();
    });

    router.post('/', function (req, res) {
        var userData = req.body;
        userController.create(userData);
        res.status(200).json("POST for user is called.").end();
    });
    
    module.exports = router;
}());