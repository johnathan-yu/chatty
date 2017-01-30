/*jslint node: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function () {
    'use strict';
    var gulp = require('gulp');
    var args = require('yargs').argv;
    var $ = require('gulp-load-plugins')({lazy: true});
    var gulpif = require('gulp-if'); // Cannot lazy load this because of reserve word "if" issue.
    var config = require('./gulp.config')();
    
//        jshint = require('gulp-jshint'),
//        jscs = require('gulp-jscs'),
//        util = require('gulp-util'),
//        gulpprint = require('gulp-print'),
//        gulpif = require('gulp-if')
        
    
    function log(msg) {
        if (typeof (msg) === 'object') {
            var item;
            for (item in msg) {
                if (msg.hasOwnProperty(item)) {
                    $.util.log($.util.colors.blue(msg[item]));
                }
            }
        } else {
            $.util.log($.util.colors.blue(msg));
        }
    }

    ///////////

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
}());