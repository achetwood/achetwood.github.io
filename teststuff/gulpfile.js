var gulp = require('gulp');
var umd = require('gulp-umd');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var htmlmin = require('gulp-htmlmin');
var addsrc = require('gulp-add-src');

//Relative location of output
var buildDestinationFolder = 'build';

gulp.task('js', function () {
	return gulp.src(['./TestApp.js'])
		.pipe(minify({
			ext: {
				src:'-debug.js',
				min:'.min.js'
			}
		}))
		.pipe(gulp.dest(buildDestinationFolder));
});

// Default task
gulp.task('default', ['js']);

