/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var express = require('express');
    var userRouter = express.Router();
    
    var router = function () {
        userRouter.route('/addUsers')
            .get(function (req, res) {
                res.sent('inserting users');
            });
        return userRouter;
    };
    
    module.exports = router;
}());