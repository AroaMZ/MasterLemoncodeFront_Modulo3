const HtmlWebpackplugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  resolve: {
    extensions: [".js", ".ts"],
  },
  mode: "development",
  entry: {
    app: ["./index.ts"],
    style: ["./style.scss"],
  },
  output: {
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: "babel-loader",
        },
        // {
        //     test: /\jsx?$/,
        //     exclude: /node_modules/,
        //     use:"babel-loader",
        // },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: "asset/resource",
      },
    ],
  },
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackplugin({
      template: "index.html",
      filename: "index.html",
      scriptLoading: "blocking",
      hash: true,
    }),
  ],
};
