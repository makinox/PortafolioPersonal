'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const size = require('gulp-size')
const webp = require('gulp-webp')
const prefixer = require('gulp-autoprefixer')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const browserSync = require('browser-sync')
const dest = 'public'

// Comprimiendo los estilos en uno solo, así como tambien los optimiza y minifica
gulp.task('styles', () => {
  return gulp
    .src('dist/styles/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(prefixer({browsers: ['ie >= 10', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4.4', 'bb >= 10']}))
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'styles'}))
})

gulp.task('assets', () => {
  return gulp
    .src('dist/assets/*')
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'assets'}))
})

gulp.task('build', () => {
  return browserify('./dist/lib/index.js')
    .transform(babel, { presets: ['es2015', 'minify'] })
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'build'}))
})

// Optimizar imagenes
gulp.task('images', () => {
  return gulp
    .src('dist/images/**/*')
    .pipe(imagemin({progressive: true, interlaced: true}))
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'images'}))
})

// Optimizar iconos
gulp.task('icons', () => {
  return gulp
    .src('dist/icons/**/*')
    .pipe(imagemin({progressive: true, interlaced: true}))
    .pipe(webp())
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'icons'}))
})

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: '.'
    }
  })
})

gulp.task('watch', () => {
  gulp.watch('./dist/styles/*', ['styles'], browserSync.reload)
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('./dist/styles/*').on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])
// gulp.task('default', ['styles', 'assets', 'images', 'icons', 'build'])