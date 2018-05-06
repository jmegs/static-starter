module.exports = function(config) {
  let markdownIt = require("markdown-it")
  let figures = require("markdown-it-implicit-figures")
  let options = {
    typographer: true
  }

  config.setLibrary("md", markdownIt(options).use(figures))

  return {
    dir: {
      input: "site",
      output: "dist"
    }
  }
}
