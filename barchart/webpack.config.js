const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 1001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // tell webpack the location of the index.html
      template: "./public/index.html",
    }),
  ],
};
