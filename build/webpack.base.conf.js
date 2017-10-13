'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 路径拼接
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 入口文件
  entry: {
    app: './src/main.js'
  },
  // 输出
  output: {
    // 设置输出的绝对路径
    path: config.build.assetsRoot,
    // 设置打包后文件名字
    filename: '[name].js',
    // 设置请求静态资源的路径 生产/开发环境的
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    // 引入文件时自动补全的后缀名
    extensions: ['.js', '.vue', '.json'],
    // 别名 eg:@/components 代表src下的components目录的绝对路径
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  //定义如何处理各模块
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        // 编译之前对代码进行检查
        enforce: 'pre',
        // 指定loader处理的目录
        include: [resolve('src'), resolve('test')],
        options: {
          // eslint出错时会通过这个处理提示信息
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 图片小于10K直接生成base64打包到 js 文件中，否则为单独的文件放到name规定的路径下
          limit: 10000,
          //name 文件名 hash:7 7位hash
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
