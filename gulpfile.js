var gulp = require('gulp'),
    browserSync = require('browser-sync');

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "app"
    },
    port: 9000
  });
}

function watch() {
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/css/**/*.css', browserSync.reload);
}

gulp.task('default', gulp.parallel(sync, watch));