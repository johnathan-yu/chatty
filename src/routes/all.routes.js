/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
module.exports = function (app) {
    'use strict';

    var cors = require('./cors.js');
    var mainRouter = require('./main.routes.js');
    var userRouter = require('./user.routes.js');

    app.use(cors);
    app.use('/', mainRouter);
    app.use('/user', userRouter);
};