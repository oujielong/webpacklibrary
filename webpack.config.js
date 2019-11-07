var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: "dist/*"
    }),
    new HtmlWebpackPlugin({ title: "Output Management" }),
    new webpack.ProvidePlugin({
      _: "lodash",
      join: ["lodash", "join"]
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve("./src/library/globals.js"),
        use: "exports-loader?file,parse=helpers.parse"
      },
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?this=>window,{file}=./library/globals.js"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].numbers.js"
  }
};
