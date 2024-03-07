const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 1002,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "linechart_name",
      filename: "remoteEntry.js",
      exposes: {
        // alias LinearchartIndex to ./src/index
        "./LinearchartIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      // tell webpack the location of the index.html
      template: "./public/index.html",
    }),
  ],
};
