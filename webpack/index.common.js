const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const {CheckerPlugin} = require("awesome-typescript-loader");
module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new CheckerPlugin()
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};
