'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// 模块功能：模板生成HTML文件，并且把打包后的js插入到HTML文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack错误提示插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
// 热更新需要添加到 entry 中的
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// 把 baseWebpackConfig 合并过来
module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // 开启热更新插件
    new webpack.HotModuleReplacementPlugin(),
    // 编译时遇到错误跳过错误使运行时不报错，但在编译后会报错
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // 生成html文件的插件
    new HtmlWebpackPlugin({
      // 生成文件的名字
      filename: 'index.html',
      // 使用的模板文件
      template: 'index.html',
      // 生成文件时自动把打包后的js文件插入到html中
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
