const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    // TODO figure out correct usage of CleanWebpackPlugin / HtmlWebpackPlugin
    // plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //   title: 'Output Management',
        // }),
    // ],
});