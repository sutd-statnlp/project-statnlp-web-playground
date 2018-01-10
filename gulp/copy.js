'use strict';

var gulp = require('gulp'),
    rev = require('gulp-rev'),
    plumber = require('gulp-plumber'),
    es = require('event-stream'),
    flatten = require('gulp-flatten'),
    replace = require('gulp-replace'),
    bowerFiles = require('main-bower-files'),
    changed = require('gulp-changed');

var handleErrors = require('./handle-errors');
var config = require('./config');

module.exports = {
    fonts: fonts,
    common: common,
    images: images,
    icons: icons,
    data: data,
    js: js
}

function fonts() {
    return es.merge(
        gulp.src(config.app + 'content/**/*.{woff,woff2,svg,ttf,eot,otf}')
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist + 'content/fonts/'))
        .pipe(flatten())
        .pipe(rev())
        .pipe(gulp.dest(config.dist + 'content/fonts/'))
        .pipe(rev.manifest(config.revManifest, {
            base: config.dist,
            merge: true
        }))
        .pipe(gulp.dest(config.dist))
    );
}

function common() {
    return gulp.src([
        config.app + 'robots.txt',
        config.app + 'favicon.ico',
        config.app + '.htaccess',
        config.app + 'manifest.webapp'
    ], { dot: true })
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist))
        .pipe(gulp.dest(config.dist));
}


function images() {
    return gulp.src(bowerFiles({filter: ['**/*.{gif,jpg,png}']}), { base: config.bower })
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist +  'bower_components'))
        .pipe(gulp.dest(config.dist +  'bower_components'));
}

function icons() {
    return gulp.src(config.app + 'content/icons/**')
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist))
        .pipe(rev())
        .pipe(gulp.dest(config.dist + 'content/icons/'));
}

function data() {
    return gulp.src(config.app + 'content/data/**')
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist))
        .pipe(gulp.dest(config.dist + 'content/data/'));
}

function js() {
    return gulp.src(config.app + 'content/js/**')
        .pipe(plumber({errorHandler: handleErrors}))
        .pipe(changed(config.dist))
        .pipe(gulp.dest(config.dist + 'content/js/'));
}
