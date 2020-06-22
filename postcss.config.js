const easyImport = require("postcss-easy-import")
const presetEnv = require("postcss-preset-env")

module.exports = {
  plugins: [easyImport, presetEnv({ features: { "nesting-rules": true } })]
}
