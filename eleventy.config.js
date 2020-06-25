const yaml = require("js-yaml")

module.exports = function (config) {
	config.addDataExtension("yml", (contents) => yaml.safeLoad(contents))
	
	config.addPassthroughCopy("assets/img")
	
	config.setBrowserSyncConfig({
		host: require("os").hostname,
		open: false,
		files: ["dist/assets/css/*", "dist/assets/js/*"]
	})

	return {
		dir: {
			output: "dist",
			input: "source/views",
			includes: "partials",
			layouts: "layouts",
			data: "../data"
		}
	}
}
