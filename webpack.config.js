const path = require("path");
const slsw = require("serverless-webpack");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: slsw.lib.entries,
  mode: "development",
  externals: {
    "aws-crt": "aws-crt",
  },
  resolve: {
    symlinks: false,
    extensions: [".js", ".json", ".ts"],
    plugins: [new TsConfigPathsPlugin()],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: path.resolve(__dirname, "src"),
        loader: "ts-loader",
        options: {},
      },
    ],
  },
};
