var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function() {
    gulp.src(['./src/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'));
});


// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
    gulp.src(['./src/css/*.css'])
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/styles/'));
});

// default gulp task
gulp.task('default', [ 'scripts', 'styles'], function() {

// watch for JS changes
    gulp.watch('./src/scripts/*.js', function() {
        gulp.run('jshint', 'scripts');
    });
// watch for CSS changes
    gulp.watch('./src/styles/*.css', function() {
        gulp.run('styles');
    });
});