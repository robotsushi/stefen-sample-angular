const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
    return gulp.src(['**/*.js', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failAfterError last. 
        .pipe(eslint.failAfterError());
});

gulp.task('sass', function () {
    return gulp.src(['**/*.scss', '!node_modules/**'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('babel', function () {
    return gulp.src('public/javascripts/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch(['public/styles/**/*.scss', '!node_modules/**'], ['sass']);
});

gulp.task('babel:watch', function () {
    gulp.watch(['public/javascripts/**/*.js', '!node_modules/**'], ['babel']);
});

gulp.task('default', ['babel:watch', 'sass']);