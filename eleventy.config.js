module.exports = function(config) {
  config.addPassthroughCopy({"src/static": "static"})
  config.setBrowserSyncConfig({
    files: ["_site/assets/main.css", "_site/assets/app.js"]
  })
  return {
    dir: {
      input: "src/views", // <- all other options relative to here
      layouts: "_layouts",
      data: "../data"
    }
  }
}
