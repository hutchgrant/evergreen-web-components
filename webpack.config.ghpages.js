const prodConfig = require('./webpack.config.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const { publicPath } = require('./ghpages.config.js');

module.exports = webpackMerge(prodConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ghpages.html',
      publicPath
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: '404.html',
      publicPath
    })
  ]
});