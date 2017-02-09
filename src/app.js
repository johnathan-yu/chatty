/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var express = require('express');
    var app = express();
    var port = process.env.PORT || 3000;
    
    //Static
    app.use(express.static('src/view'));
    
    app.get('/', function (req, res) {
        res.send('Welcome to Chatty');
    });
    
    app.listen(port, function () {
        console.log('Running on PORT: ' + port);
    });
}());