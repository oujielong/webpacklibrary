var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash]-webpack-numbers.js",
    library: "webpackNumbers",
    libraryTarget: "umd"
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: "dist/*"
    })
  ],
  externals: [
    {
      lodash: {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_"
      }
    },
    "./library/lodash",
    "./library/a",
    "./library/b"
  ]
};
