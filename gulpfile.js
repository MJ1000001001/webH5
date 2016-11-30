var del=require('del');
var gulp=require('gulp');
var uglify=require('gulp-uglify');
var mincss=require('gulp-clean-css');
var inline=require('gulp-inline-source');
var include=require('gulp-include');
var sequence=require('gulp-sequence');
var useref=require('gulp-useref');
var gulpif=require('gulp-if');
var print=require('gulp-print');
var connect=require('gulp-connect');


//清理构建目录
gulp.task('clean',function (cb) {
    del(['dist']).then(function () {
        cb()
    })
});



gulp.task('mincss',function () {
    return gulp.src('./*.css')
        .pipe(mincss())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('minjs',function () {
    return gulp.src('./*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});


gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(inline())
        .pipe(include())
        .pipe(print())
        .pipe(useref())
        .pipe(gulpif('*.js',uglify()))
        .pipe(gulpif('*.css',mincss()))
        .pipe(connect.reload())
        .pipe(gulp.dest('dist'));
});


//本地服务器  支持自动刷新页面
gulp.task('connect', function() {
    connect.server({
        root: './dist', //本地服务器的根目录路径
        port:8080,
        livereload: true
    });
});


gulp.task('watchlist',function (cb) {
    sequence('clean',['mincss','minjs','html'])(cb)
});

gulp.task('watch',function () {
    gulp.watch(['./**'],['watchlist']);
});


gulp.task('default',function (cb) {
    sequence('clean',['mincss','minjs','html','connect'],'watch')(cb)
});



Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help
