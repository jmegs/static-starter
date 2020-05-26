const requireDir = require("require-dir")
const remarkPlugin = require("@fec/eleventy-plugin-remark")
const unwrapImagesPlugin = require("remark-unwrap-images")

const filters = requireDir("./utils/filters")
const isProduction = process.env.NODE_ENV === "production"
const globs = {
  posts: "src/posts/**/*.md"
}

module.exports = function (config) {
  // Plugins
  config.addPlugin(remarkPlugin, { plugins: [unwrapImagesPlugin] })

  // Filters
  Object.keys(filters).forEach((filter) => {
    config.addFilter(filter, filters[filter])
  })

  // Passthrough Files
  // the src/public directory dumps directly to root
  config.addPassthroughCopy({ "src/public": "." })
  config.addPassthroughCopy("src/assets/images")
  config.addPassthroughCopy("src/assets/fonts")

  // Base Config
  return {
    dir: {
      input: "src", // <- all other options relative to here
      includes: "includes",
      layouts: "layouts",
      data: "data",
      output: "dist"
    }
  }
}
