var gulp = require("gulp");
var del = require('del');
var babel = require("gulp-babel");
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var spawn = require('child_process').spawn;
var server_process = null;

// Clean dist and dist-server
gulp.task('clean', function() {
    return del(["dist-server/**/*", "dist/**/*"]);
});

// Copy routes.json and EJS views
gulp.task('copy-uncompiled-files', function() {
    return gulp.src(["src/routes.json", "src/views/**/*.ejs"], { base: "src" })
        .pipe(gulp.dest("dist-server"));
});

// ES6 and JSX transpilation to dist-server
gulp.task('transpile', function() {
    return gulp.src("src/**/*.js", {base: "src"})
        .pipe(babel())
        .pipe(gulp.dest("dist-server"));
});

// Bundle JS files in dist-server and save in dist
gulp.task('bundle-js', gulp.series('transpile', function() {
    return gulp.src('dist-server/pages/home.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('.'));
}));

// Bundle SASS/CSS files and save in dist
gulp.task('bundle-css', function(){
    return gulp.src('src/scss/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

// Watch files
gulp.task('watch', function() {
    var changeLogger = function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    };

    gulp.watch("src/**/*.js", gulp.task('bundle-js'))
        .on('change', changeLogger);
    gulp.watch("src/**/*.css", gulp.task('bundle-css'))
        .on('change', changeLogger);
    gulp.watch("src/**/*.scss", gulp.task('bundle-css'))
        .on('change', changeLogger);
    gulp.watch(["src/routes.json", "src/router.js", "src/data/**/*.js", "src/views/**/*.ejs"], gulp.task('copy-uncompiled-files'))
        .on('change', changeLogger);
});

// Clean, move, transpile (inside bundle), and bundle
gulp.task("build", gulp.series(
    'clean',
    'copy-uncompiled-files',
    'bundle-js',
    'bundle-css'
));

// Serve and watch
gulp.task('serve', gulp.series('watch', function() {
    var runServer = function() {
        return spawn('node', ['server.js'], {
            cwd: "dist-server"
        });
    };

    var log = function(data) {
        process.stdout.write("" + data);  // Does not include a trailing newline
    }

    // Run server
    server_process = runServer();
    server_process.stdout.on('data', log);
    server_process.stderr.on('data', log);

    // Restart server when server.js is modified and transpiled
    gulp.watch(['dist-server/server.js', 'dist-server/routes.json'])
        .on('change', function() {
            server_process.kill();
            server_process = runServer();
            server_process.stdout.on('data', log);
            server_process.stderr.on('data', log);
            console.log("Server restarted!");
        });
}));

// Build and watch
gulp.task("default", gulp.series(
    'build',
    'serve'
));
