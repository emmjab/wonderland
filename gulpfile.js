var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('webpack', function() {
  gulp.src('js/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/js/')); 
});

gulp.task('copy', function() {
  gulp.src('bower_components/**/*')
    .pipe(gulp.dest('dist/bower_components'));
  gulp.src('index.html')
    .pipe(gulp.dest('dist'));

});

gulp.task('watch', function () {
  gulp.watch('js/**/*.*', ['webpack', 'copy']);
});

gulp.task('default', ['webpack', 'copy', 'watch']);
