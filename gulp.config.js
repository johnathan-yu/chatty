/*jslint node: true*/
module.exports = function () {
    'use strict';
    
    var config = {
        // all js to vet
        alljs: [
            '*.js',
            'src/**/*.js',
            '!src/lib/**/*.js',
            '!node_modules/**/*.js'
        ],
        
        allCss: [
            'src/**/*.css'
        ],
        
        bowerJson: './bower.json',
        
        env: {
            port: 3000,
            monitorDelay: 1
        },
        
        // Inject
        customJs: './src/js/*.js',
        customCss: './src/css/*.css',
        injectIgnorePath: '/src',
        wiredepIgnorePath: '../',
        viewSrc: './src/view',
        
        startScript: './src/app.js',
        
        clientSrc: './src/',
        
        browserReloadDelay: 1,
        
        build: './build/'
    };
    
    return config;
};