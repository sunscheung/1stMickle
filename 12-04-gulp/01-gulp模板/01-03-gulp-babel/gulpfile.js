const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es6:babel', () =>
  gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
);

gulp.task('build', ['es6:babel'], function () {
    console.log('ok...')
})

gulp.task('default', ['build']);