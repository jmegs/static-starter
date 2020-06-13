const remarkPlugin = require("@fec/eleventy-plugin-remark")
const unwrapImagesPlugin = require("remark-unwrap-images")

// const isProduction = process.env.NODE_ENV === "production"

module.exports = function (config) {
  // Plugins
  config.addPlugin(remarkPlugin, { plugins: [unwrapImagesPlugin] })

  // Passthrough Files
  // the src/public directory dumps directly to root
  config.addPassthroughCopy({ "source/public": "." })
  config.addPassthroughCopy("source/assets/images")
  config.addPassthroughCopy("source/assets/fonts")

  // Base Config
  return {
    dir: {
      input: "source", // <- all other options relative to here
      includes: "includes",
      layouts: "layouts",
      data: "data",
      output: "dist"
    }
  }
}
