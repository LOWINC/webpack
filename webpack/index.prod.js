const merge = require("webpack-merge");
const common = require("./index.common");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const pkg = require("../package.json");
const DeclarationBundlerPlugin = require("declaration-bundler-webpack-plugin");

console.log(`打包库:${pkg.name}`);

module.exports = merge(common, {
  entry: {
    index: "./src/index.ts"
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "[name].js",
    library: pkg.name,
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new DeclarationBundlerPlugin({
      moduleName: pkg.name,
      out: "index.d.ts"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
});
