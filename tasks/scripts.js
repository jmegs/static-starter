const config = require("./_config.json")
const gulp = require("gulp")
const webpack = require("webpack")
const webpackStream = require("webpack-stream")

// Script entrypoints
const SCRIPTS = {
  app: "app.js"
}

// Tell webpack the current env
const envPlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})

const babelConfig = {
  test: /\.m?js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"]
    }
  }
}

module.exports = function scripts() {
  // Create entrypoints object
  // https://stackoverflow.com/a/51394013
  const entryPaths = Object.fromEntries(
    Object.entries(SCRIPTS).map(([key, file]) => [
      key,
      `./${config.assetSrc}/scripts/${file}`
    ])
  )

  return gulp
    .src(`${config.assetSrc}/scripts/app.js`)
    .pipe(
      webpackStream({
        mode:
          process.env.NODE_ENV === "production" ? "production" : "development",
        entry: entryPaths,
        output: { filename: "[name].js" },
        module: { rules: [babelConfig] },
        plugins: [envPlugin],
        stats: "errors-warnings"
      })
    )
    .pipe(gulp.dest(config.assetDest + "/js"))
}
