const config = require("./_config.json")
const gulp = require("gulp")
const critical = require("critical")

const criticalStream = critical.stream

const criticalConfig = {
  inline: true,
  base: `${config.buildDest}/`,
  css: [
    `${config.assetDest}/css/main.css`
  ]
}

module.exports = function critical() {
  return gulp
    .src(`${config.buildDest}/index.html`)
    .pipe(criticalStream(criticalConfig))
    .on("error", (err) => {
      console.error(err.message)
    })
    .pipe(gulp.dest(config.buildDest))
}
