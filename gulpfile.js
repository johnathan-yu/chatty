/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var gulp = require('gulp');
    var args = require('yargs').argv;
    var browserSync = require('browser-sync');
    var wiredep = require('wiredep').stream;
    var $ = require('gulp-load-plugins')({lazy: true});
    var gulpif = require('gulp-if'); // Cannot lazy load this because of reserve word "if" issue.
    var config = require('./gulp.config')();
    
    function log(msg) {
        if (typeof (msg) === 'object') {
            var item;
            for (item in msg) {
                if (msg.hasOwnProperty(item)) {
                    $.util.log($.util.colors.cyan(msg[item]));
                }
            }
        } else {
            $.util.log($.util.colors.cyan(msg));
        }
    }
    
    function startBrowserSync() {
        if (args.nosync || browserSync.active) {
            return;
        }
        
        log('Starting browser-sync on port ' + config.env.port);
        
        var options = {
            proxy: 'localhost:' + config.env.port,
            port: 4000,
            files: [config.clientSrc + '**/*.*'],
            ghostMode: {
                clicks: true,
                location: false,
                forms: true,
                scroll: true
            },
            injectChanges: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'chatty',
            notify: true,
            reloadDelay: 1000
        };
        browserSync(options);
    }

    /////////// Tasks ///////////////
    
    gulp.task('help', $.taskListing);
    gulp.task('default', ['help']);

    gulp.task('vet', function () {
        log('Analyzing source with JSHint and JSCS');

        return gulp.src(config.alljs).pipe(
            gulpif(args.verbose, $.print())
        ).pipe(
            $.jscs()
        ).pipe(
            $.jshint()
        ).pipe(
            $.jshint.reporter('jshint-stylish', {verbose: true})
        );
    });
    
    gulp.task('wiredep', function () {
        log('Injecting bower depencies');

        var options = {
            bowerJson: require(config.bowerJson),
            ignorePath: config.wiredepIgnorePath
        };
        
        return gulp.src(config.viewSrc + '/*.html').pipe(
            wiredep(options)
        ).pipe(
            gulp.dest(config.viewSrc)
        );
    });
    
    gulp.task('inject', function () {
        log('Injecting custom depencies');
        
        var customJsCss = [].concat(config.customJs, config.customCss);
        var injectSrc = gulp.src(customJsCss, {read: false});
        var injectOptions = {
            ignorePath: config.injectIgnorePath
        };
        
        return gulp.src(config.viewSrc + '/*.html').pipe(
            $.inject(injectSrc, injectOptions)
        ).pipe(
            gulp.dest(config.viewSrc)
        );
    });
    
    gulp.task('serve', function () {
        var options = {
            script: config.startScript,
            delayTime: config.monitorDelay,
            env: {
                'PORT': config.env.port
            },
            watch: config.alljs
        };
        
        return $.nodemon(options).on(
            'restart',
            function (event) {
                // Note that restart will trigger start event.  Don't call
                // task that start event will call because it's redundant.
                log('File changed: ' + event);
                
                setTimeout(function () {
                    browserSync.notify('reloading now ...');
                    browserSync.reload({stream: false});
                }, config.browserReloadDelay);
                
                log('*** nodemon restarted');
            }
        ).on(
            'start',
            ['wiredep', 'inject', 'vet'],
            function () {
                startBrowserSync();
                log('*** nodemon started');
            }
        ).on(
            'crash',
            function () {
                log('*** nodemon crashed');
            }
        ).on(
            'exit',
            function () {
                log('*** nodemon exited');
            }
        );
    });
}());