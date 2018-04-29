// gulp things
const gulp = require("gulp")
const del = require("del")
const plumber = require("gulp-plumber")
const cp = require("child_process")

// js things
const concat = require("gulp-concat")

// css things
const postcss = require("gulp-postcss")
const atImport = require("postcss-import")
const cssnext = require("postcss-cssnext")

// image things
const imagemin = require("gulp-imagemin")

// dev server things
const browserSync = require("browser-sync").create()

// what goes where?
const outputDir = "dist"

// task clean
// clean up the build output
function clean(cb) {
  return del([outputDir])
  cb()
}

// task generate
// builds the templates in site/ with eleventy
function generate() {
  return cp.spawn("npx", ["eleventy"]).on("close", function(code) {
    if (code !== 0) {
      console.error("eleventy failed with code" + code)
    }
    browserSync.reload()
  })
}

// task styles
// compiles css with cssnext and imports
const cssconfig = [atImport({ from: "./assets/css/main.css" }), cssnext()]
function styles() {
  return gulp
    .src("assets/css/*.css")
    .pipe(plumber())
    .pipe(postcss(cssconfig))
    .pipe(gulp.dest(`${outputDir}/css`))
    .pipe(browserSync.stream())
}

// task scripts
// simply concatenate js into one file
// TODO add webpack https://pawelgrzybek.com/using-webpack-with-gulpjs/
function scripts() {
  return gulp
    .src("assets/js/**/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest(`${outputDir}/js`))
    .pipe(browserSync.stream())
}

// task images
// copy and minify images
function images() {
  return gulp
    .src("assets/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest(`${outputDir}/img`))
    .pipe(browserSync.stream())
}

// task fonts
// copy fonts from source to build
function fonts() {
  return gulp
    .src("assets/fonts/**/*")
    .pipe(gulp.dest(`${outputDir}/fonts`))
    .pipe(browserSync.stream())
}

// task watch
// watch for changes and run appropriate tasks
function watch() {
  browserSync.init({ server: `./${outputDir}`, open: false })
  gulp.watch("assets/css/**/*", styles)
  gulp.watch("assets/js/**/*", scripts)
  gulp.watch("assets/img/**/*", images)
  gulp.watch("assets/fonts/**/*", fonts)
  gulp.watch("site/**/*", generate)
}

// register tasks
exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.fonts = fonts
exports.images = images
exports.watch = watch
exports.generate = generate

const buildAssets = gulp.parallel(styles, scripts, images, fonts)
const build = gulp.series(clean, generate, buildAssets)
const develop = gulp.series(clean, generate, buildAssets, watch)

gulp.task("develop", develop)
gulp.task("build", build)
