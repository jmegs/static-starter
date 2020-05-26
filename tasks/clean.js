const config = require("./_config.json")
const del = require("del")

module.exports = function clean(done) {
  return del([config.buildDest])
}
