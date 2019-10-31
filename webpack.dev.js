const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");
module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.NamedModulesPlugin()
  ]
});
