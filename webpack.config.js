const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackBar = require("webpackbar")

module.exports = {
  stats: "errors-only",
  entry: "./src/assets/app.js",
  output: {
    path: path.resolve(__dirname, "_site/assets"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
              reloadAll: true
            }
          },
          // "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("postcss-preset-env")()]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new WebpackBar({name: "Assets"})]
}
