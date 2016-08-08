'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('bower-files')();
var config = require('./config');

//Inject the bower files into the html.
gulp.task('vendors:dev', function () {

    var injectOptions = {
        name: 'vendors',
        addSuffix: '?v=' + new Date().getTime()
    };

    return gulp.src(config.getView())
        .pipe(inject(gulp.src(bowerFiles.ext('js').files), injectOptions))
        .pipe(gulp.dest(config.getRoot()));
});
