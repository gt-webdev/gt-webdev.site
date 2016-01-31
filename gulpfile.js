var gulp = require("gulp");
var del = require('del');
var runSequence = require('run-sequence');
var babel = require("gulp-babel");
var webpack = require('webpack-stream');
var exec = require('child_process').exec;
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

// Bundle files in dist-server and save in dist
gulp.task('bundle', ['transpile'], function() {
  return gulp.src('dist-server/pages/home.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('.'));
});

// Watch files
gulp.task('watch', function() {
  var changeLogger = function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  };

  gulp.watch("src/**/*.js", ['bundle'])
    .on('change', changeLogger);
  gulp.watch(["src/routes.json", "src/views/**/*.ejs"], ['copy-uncompiled-files'])
    .on('change', changeLogger);
});

// Clean, move, transpile (inside bundle), and bundle
gulp.task("build", function(callback) {
  runSequence('clean',
    'copy-uncompiled-files',
    'bundle',
    callback);
});

// Serve and watch
gulp.task('serve', ['watch'], function() {
  var runServer = function() {
    return exec('node server.js', {
      cwd: "dist-server"
    });
  };

  // Run server
  server_process = runServer();

  // Restart server when server.js is modified and transpiled
  gulp.watch('dist-server/server.js')
    .on('change', function() {
      server_process.kill();
      server_process = runServer();
      console.log("Server restarted!");
    });
});

// Build and watch
gulp.task("default", function (callback) {
  runSequence('build',
    'serve',
    callback);
});