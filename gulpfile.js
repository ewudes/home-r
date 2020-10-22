var gulp = require('gulp'),
    browserSync = require('browser-sync');

function sync() {
  browserSync.init({
    server: {
      baseDir: "app"
    },
    port: 9000
  });
}

function browserReload(done) {
  browserSync.reload()
  done();
}

function watch() {
  gulp.watch('app/*.html', browserReload);
  gulp.watch('app/js/**/*.js', browserReload);
  gulp.watch('app/css/**/*.css', browserReload);
}

gulp.task('default', gulp.parallel(sync, watch));