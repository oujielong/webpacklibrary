var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].numbers.js"
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: "dist/*"
    }),
    new HtmlWebpackPlugin({ title: "Output Management" }),
    new webpack.ProvidePlugin({
      _: "lodash"
    })
  ]
};
