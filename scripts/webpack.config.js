const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const babel = require("./babel.config");
const AdobeXdPlugin = require('./webpack.adobexd.plugin');

const OUTPUT = path.resolve(__dirname, "../dist");

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: process.env.NODE_ENV || 'production',
  output: {
    path: OUTPUT,
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  devtool: "none", // prevent webpack from using eval() on my module
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          ...babel
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    scenegraph: 'scenegraph'
  },
  plugins: [new CopyWebpackPlugin(["src/manifest.json"]), new AdobeXdPlugin()]
};
