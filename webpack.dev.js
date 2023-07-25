const common = require("./webpack.common.js")
const {merge} = require("webpack-merge");
const DotEnv = require("dotenv-webpack");
module.exports = merge(common,{
 
  resolve: {
    extensions: [".js", ".ts"],
  },
  mode: "development",

  module: {
    rules: [
     
    ],
  },
  devtool: "eval-source-map",
  plugins: [
    new DotEnv({
        path: "./dev.env",
    })
  ]
});
