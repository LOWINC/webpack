const common = require("./index.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  entry: {
    index: "./src/test.ts"
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
      title: "HtmlWebpackPlugin"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
