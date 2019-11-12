const merge = require("webpack-merge");
const common = require("./index.common");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const pkg = require("../package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  entry: {
    index: "./src/index.ts"
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "[name].js",
    library: pkg.name,
    libraryTarget: "umd",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
});
