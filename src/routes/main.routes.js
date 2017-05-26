/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var express = require('express');
    var router = express.Router();

    router.get('/', function (req, res) {
        res.status(200).json('Welcome to Chatty').end();
    });
    
    module.exports = router;
}());