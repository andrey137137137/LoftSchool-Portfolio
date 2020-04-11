const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    common: path.resolve(__dirname, "src/js/common.js"),
    rest: path.resolve(__dirname, "src/js/rest.js"),
    home: path.resolve(__dirname, "src/js/home.js"),
    works: path.resolve(__dirname, "src/js/works.js"),
    about: path.resolve(__dirname, "src/js/about.js"),
    blog: path.resolve(__dirname, "src/js/blog.js")
  },
  output: {
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/public/",
    filename: "[name].bundle.js"
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
