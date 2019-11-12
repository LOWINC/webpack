const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";


module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new webpack.ProgressPlugin()]
};
