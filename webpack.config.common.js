const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const publicPath = '/';

module.exports = {
  context: path.resolve('./docs'),

  entry: {
    index: './index'
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].[chunkhash].bundle.js',
    publicPath
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['css-to-string-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'dependency'
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(__dirname, './docs/assets'), to: path.join(__dirname, './public/assets') }
      ]
    })
  ]
};
