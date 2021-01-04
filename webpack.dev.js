const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Output Management',
    // }),
  ],
});