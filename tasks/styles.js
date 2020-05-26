const config = require("./_config.json")
const gulp = require("gulp")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const cssEnv = require("postcss-preset-env")
const sourcemaps = require("gulp-sourcemaps")
const cleanCSS = require("gulp-clean-css")

sass.compiler = require("sass")

const paths = {
  src: config.assetSrc + "/styles/main.scss",
  dest: config.assetDest + "/css"
}

function devStyles() {
  return gulp
    .src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(postcss([cssEnv()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
}

function prodStyles() {
  return gulp
    .src(paths.src)
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(postcss([cssEnv()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dest))
}

module.exports = function styles() {
  if (process.env.NODE_ENV !== "production") {
    return devStyles()
  } else {
    return prodStyles()
  }
}
