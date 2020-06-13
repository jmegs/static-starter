const cssEnv = require("postcss-preset-env")
const cssnano = require("cssnano")

const plugins = [cssEnv]
if (process.env.NODE_ENV === "production") {
	plugins.push(cssnano)
}

module.exports = { plugins }