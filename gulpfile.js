let gulp = require('gulp');
let sass = require('gulp-sass');
 
gulp.task('sass', (done) => {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    done();
});
 
gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});