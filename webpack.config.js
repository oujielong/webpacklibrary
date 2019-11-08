var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    polyfills: "./src/polyfills.js",
    index: "./src/index.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 9000,
    clientLogLevel: "error",
    // 远程代理
    // 请求 localhsot:8080/proxy/a/b/c --->https://jsonplaceholder.typicode.com/a/b/c
    proxy: {
      "/CBM": {
        target: "http://172.16.100.60:18133", //指定代理的域名
        changeOrigin: true, // 改变源到url
        secure: false
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: "dist/*"
    }),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./index.html"
    }),
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
    filename: "[name].js"
  }
};
