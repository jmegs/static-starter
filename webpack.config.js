const path = require("path")
const ManifestPlugin = require("webpack-manifest-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Webpackbar = require("webpackbar")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const isProd = process.env.NODE_ENV === "production"
const baseFilename = isProd ? "[name].[contenthash]" : "[name]"

module.exports = {
  mode: isProd ? "production" : "development",
  entry: [
    path.resolve(__dirname, "source", "assets", "js", "main.js"),
    path.resolve(__dirname, "source", "assets", "css", "main.scss")
  ],
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    filename: `${baseFilename}.js`
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/env", { useBuiltIns: "usage", corejs: 3 }]]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  watch: isProd ? false : true,
  stats: isProd
    ? {
        all: false,
        assets: true
      }
    : "errors-only",
  devtool: isProd ? "source-map" : "eval",
  plugins: [
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
    new ManifestPlugin({
      fileName: path.resolve(__dirname, "source", "data", "manifest.json"),
      publicPath: "/assets/"
    }),
    new Webpackbar({ basic: true }),
    new CleanWebpackPlugin()
  ]
}
