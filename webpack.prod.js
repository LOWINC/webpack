const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({sourceMap: true}),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20
    })
  ]
});
