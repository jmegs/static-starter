const requireDir = require("require-dir")
const remarkPlugin = require("@fec/eleventy-plugin-remark")
const unwrap = require("remark-unwrap-images")

const shortcodes = requireDir("./src/includes/components")
const filters = requireDir("./src/utils/filters")

module.exports = function(config) {
  config.addPlugin(remarkPlugin, { plugins: [unwrap]})

  // register shortcodes and filters
  // each file in these dirs will be exposed under its filename
  Object.keys(shortcodes).forEach((shortcode) => {
    config.addNunjucksShortcode(shortcode, shortcodes[shortcode])
  })

  Object.keys(filters).forEach((filter) => { 
    config.addFilter(filter, filters[filter])
  })
  
  // copy everything in src/public to the root of the built site
  // use for static assets like favicons, fonts, images, etc
  config.addPassthroughCopy({ "src/public": "." })

  // have the 11ty browsersync instance watch the built assets folder
  config.setBrowserSyncConfig({
    files: "src/assets/*",
    host: require("os").hostname()
  })

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src/pages", // <- all other options relative to here
      includes: "../includes",
      layouts: "../includes/layouts",
      data: "../data"
    }
  }
}
