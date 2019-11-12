const common = require("./index.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const path = require("path");

module.exports = merge(common, {
  entry: {
    index: "./src/app"
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: "HtmlWebpackPlugin",
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
