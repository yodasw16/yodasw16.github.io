var gulp = require('gulp'),
  cp = require('child_process'),
  browserSync = require('browser-sync'),
  plugins = require('gulp-load-plugins')();

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], { stdio: 'inherit' })
    .on('close', done);
});

// Rebuild Jekyll & do page reload when changes happen
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

// Wait for jekyll-build, then launch the browser-sync server
gulp.task('browser-sync', ['build', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

// Build task
gulp.task('build', ['styles']);

// Styles task
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(plugins.sass({
      errLogToConsole: true,
      onError: browserSync.notify
    }))
    .pipe(plugins.autoprefixer({
      browsers: ['> 1%','last 2 versions'],
      cascade: false
    }))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('_site/styles/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('./styles/'));
});

// Watch task
gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss',['styles']);
  gulp.watch(['**/*.html', '**/*.md', '_config.yml'], ['jekyll-rebuild']);
});

// Default task
gulp.task('default', ['browser-sync', 'watch']);
