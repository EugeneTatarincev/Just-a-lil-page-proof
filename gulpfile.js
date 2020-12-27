let gulp = require('gulp');
let sass = require('gulp-sass');
 
gulp.task('sass', (done) => {
  gulp.src('./sass/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    done();
});
 
gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/style.scss', gulp.series('sass'));
});