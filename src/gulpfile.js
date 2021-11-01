var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['watch'], function ()
{
    gulp.start('sass');
});

gulp.task('sass', function ()
{
    return gulp.src('./sass/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css/'))
});

gulp.task("watch", function ()
{
    gulp.watch(['./sass/*.scss', './sass/*/**.scss'], ['sass']);
});