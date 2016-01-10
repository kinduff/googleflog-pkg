var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var ghPages = require('gulp-gh-pages');

gulp.task('copy', function() {
  return gulp.src(['./src/googleflog.js'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', function() {
  return gulp.src(['./src/googleflog.js'])
    .pipe(uglify('googleflog.min.js', {
      mangle: true,
      compress: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
  return gulp.src([
      './dist/googleflog.min.js',
      './app/src/js/script.js'
    ])
    .pipe(uglify('app.js', {
      compress: false
    }))
    .pipe(gulp.dest('./app/dist/js'));
});

gulp.task('css', function() {
  return gulp.src('./app/src/style/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./app/dist/style'));
});

gulp.task('images', function() {
  return gulp.src(['./app/src/images/**/*'])
    .pipe(gulp.dest('./app/dist/images'));
});

gulp.task('jade', function() {
  return gulp.src('./app/src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./app/dist'))
});

gulp.task('default', ['copy', 'minify']);
gulp.task('app', ['default', 'js', 'css', 'images', 'jade']);
gulp.task('deploy', ['app'], function() {
  return gulp.src('./app/dist/**/*')
    .pipe(ghPages({ push: false }));
});
