var gulp        = require('gulp'),
    less        = require('gulp-less'),
    path        = require('path'),
    prefixer    = require('gulp-autoprefixer'),
    watch       = require('gulp-watch'),
    browserSync = require("browser-sync"),
    reload      = browserSync.reload;

gulp.task('move', function () {
    gulp.src('./src/*.html', {base: './src'})
        .pipe(gulp.dest('./public'))
        .pipe(reload({stream: true}));
});

gulp.task('style', function () {
    return gulp.src('./src/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(prefixer())
        .pipe(gulp.dest('./public/css'))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function () {
    watch(['src/less/**/*.less'], function () {
        gulp.start('style');
    });
    watch(['src/index.html'], function () {
        gulp.start('move');
    });
});

// *** Server
var config = {
    server: {
        baseDir: "./public"
    },
    ghostMode: {
        clicks: false,
        forms: false,
        scroll: false
    },
    tunnel: false,
    ui: false,
    host: 'localhost',
    port: 9000,
    //open: false, // Don't open browser on server start
    logPrefix: "Matrix Video"
};
gulp.task('webserver', function () {
    browserSync(config);
});

// *** Default task
gulp.task('default', ['move', 'style', 'webserver', 'watch']);
