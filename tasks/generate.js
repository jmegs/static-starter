const exec = require("child_process").exec

module.exports = function generate(done) {
  const cmd = `NODE_ENV=${process.env.NODE_ENV} eleventy`
  exec(cmd, err => {
    done(err)
  })
}