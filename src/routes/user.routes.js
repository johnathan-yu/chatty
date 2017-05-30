/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var userController = require('../controllers/user.controller.js');

    router.get('/', function (req, res) {
        res.status(200).json('GET for user is called.');
    });

    router.post('/', function (req, res) {
        userController.create(req.body)
            .then(function (data) {
                console.log('User: ' + JSON.stringify(data));
                res.status(200).json(data);
            })
            .catch(function (err) {
                console.log('Error: ' + JSON.stringify(err));
                res.status(400).json(err);
            });
    });

    module.exports = router;
}());