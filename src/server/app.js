/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var express = require('express');
    var path = require('path');
    var favicon = require('serve-favicon');
    var logger = require('morgan');
    var bodyParser = require('body-parser');
    var cookieParser = require('cookie-parser');

    var app = express();
    var port = process.env.PORT || 3000;

    //Static
    app.use(logger('dev'));
    // app.use(favicon(dirname + './src/server/favicon.ico'));
    app.use(express.static('./src/client/view/'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser());

    //Load routes
    require('../routes/all.routes.js')(app);

    app.listen(port, function () {
        console.log('Running on PORT: ' + port);
    });
}());