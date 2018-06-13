const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const webpack = require('webpack');

module.exports = merge(common, {
  entry: {
    app: ['./src/index.js', 'webpack-hot-middleware/client'],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});