/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';

    var cors = function (req, res, next) {
        res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like http://localhost:4200
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        next();
    }
    
    module.exports = cors;
}());