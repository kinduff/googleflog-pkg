var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');

gulp.task('dist', function() {
  return gulp.src(['./src/googleflog.js'])
    .pipe(gulp.dest('./dist'))
    .pipe(uglify('googleflog.min.js', {
      mangle: true,
      compress: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['dist']);
