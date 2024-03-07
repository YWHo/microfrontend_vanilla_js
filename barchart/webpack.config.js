const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "barchart_name",
      filename: "remoteEntry.js",
      exposes: {
        // alias BarchartIndex to ./src/index
        "./BarchartIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      // tell webpack the location of the index.html
      template: "./public/index.html",
    }),
  ],
};
