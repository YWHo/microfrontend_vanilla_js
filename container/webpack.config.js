const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 1000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // tell webpack the location of the index.html
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        // note1: "barchart_imp" in "barchart_imp:" needs to match the import defined in "bootstrap.js"
        // note2: "barchart_name" in "barchart_name@" needs to match the name defined
        //       in the webpack.config.js of the remote
        barchart_imp: "barchart_name@http://localhost:1001/remoteEntry.js",
      },
    }),
  ],
};
