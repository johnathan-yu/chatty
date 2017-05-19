/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
module.exports = function () {
    'use strict';
    var temp = './.tmp/';
    var client = './src/client/';
    var clientApp = client + 'app/';
    var htmlView = client + 'view/';
    var server = './src/server/';
    var build = './build/';
    var buildView = build + 'view/';
    
    var config = {
        // all js to vet
        alljs: [
            client + '*.js',
            client + '**/*.js',
            '!' + client + 'lib/**/*.js'
        ],
        allCss: [
            client + '**/*.css'
        ],
        bowerJson: './bower.json',
        browserReloadDelay: 1,
        build: build,
        client: client,
        env: {
            port: 3000,
            monitorDelay: 1
        },
        htmltemplates: htmlView + '**/*.html',
        inject: {
            destination: buildView,
            files: [
                client + '/js/*.js',
                client + '/css/*.css'
            ],
            ignorePath: client
        },
        startScript: server + 'app.js',
        temp: temp,
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: htmlView
            }
        },
        wiredep: {
            destination: buildView,
            ignorePath: '../../'
        }
    };
    
    return config;
};