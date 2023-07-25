const {merge} = require("webpack-merge");
const HtmlWebpackplugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common.js");  
const DotEnv = require("dotenv-webpack");

module.exports = merge(common,  {
  mode: "production",
  output: {
    filename: "js/[name].[chunkhash].js",
    assetModuleFilename: "assets/[name].[hash].[ext]",
  },
  
  module: {
    rules: [
    ]
  },
  plugins:[
    new DotEnv({
        path: "./prod.env",
    })

  ]
  
});
