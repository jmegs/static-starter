const config = require("./tasks/_config.json")
const gulp = require("gulp")
const browserSync = require("browser-sync")
const server = browserSync.create()

const clean = require("./tasks/clean")
const critical = require("./tasks/critical")
const generate = require("./tasks/generate")
const scripts = require("./tasks/scripts")
const styles = require("./tasks/styles")

const watchers = {
  scripts: `${config.assetSrc}/scripts/**/*`,
  styles: `${config.assetSrc}/styles/**/*`,
  site: [
    `${config.buildSrc}/**/*.{html, md, json}`,
    `!${config.assetSrc}`,
    `utils/**/*`
  ]
}

// Browsersync Dev Server
function serve(done) {
  server.init({
    server: { baseDir: config.buildDest, open: false }
  })
  done()
}

const reload = (done) => {
  server.reload()
  done()
}

// Watch folders for changes
function watch() {
  gulp.watch(watchers.scripts, gulp.series(scripts, reload))
  gulp.watch(watchers.styles, gulp.series(styles, reload))
  gulp.watch(watchers.site, gulp.series(generate, reload))
}

// Run the asset pipeline
const buildAssets = gulp.parallel(scripts, styles)

// Run the browsersync server and watch for changes
const runDevServer = gulp.parallel(serve, watch)

exports.dev = gulp.series(clean, generate, buildAssets, runDevServer)
exports.build = gulp.series(clean, generate, buildAssets, critical)
