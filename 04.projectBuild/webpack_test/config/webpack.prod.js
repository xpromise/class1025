const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// npm i extract-text-webpack-plugin@next -D
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanCSSPlugin = require("less-plugin-clean-css");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  //入口
  entry: {
    main: './src/js/app.js',
    test: './src/js/test.js'
  },  //手动引入html文件
  //输出
  output: {
    //输出的文件路径
    path: resolve(__dirname, '../dist'),
    //文件名称
    filename: './js/[name].[chunkhash:7].js'
  },
  //loader
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, //也需要在package.json中加载eslint的配置
        use: [{  //一旦匹配上，就是用以下loader处理文件
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  //告诉babel如何处理当前文件
          }
        }, "eslint-loader"]   //在use数组中，loader执行顺序是从右往左的
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', {
            loader: "less-loader", options: {
              plugins: [
                new CleanCSSPlugin({ advanced: true })
              ]
            }
          }]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,  // 8 * 1024 = 8kb  8kb以下的图片会自动转换为base64格式
              name: '[hash:7].[ext]',
              outputPath: 'images',  //图片资源的输出路径（输出到哪个文件夹去）
              publicPath: '../images' //修改样式文件中url图片路径
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',  //重命名输出文件的名字
      template: './src/index.html',  //模板资源：往引入的模板资源中添加js和css，输出出去
      minify: {   //压缩html
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new ExtractTextPlugin("./css/[name].[hash:7].css"),  //提取css成单独文件
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助 ServiceWorkers 快速启用
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
    /*new CleanWebpackPlugin([
      'dist'
    ], {
      root: resolve(__dirname, '../'),
      // exclude:  ['shared.js'],
    })*/
  ],
  //模式
  mode: 'production',
  //提取公共模块
  optimization: {
    splitChunks: {
      //提取公共模块的分组
      cacheGroups: {
        vendors: {  //提取后输出的模块名称
          test: /[\\/]node_modules[\\/]/,  //针对哪些模块文件处理
          priority: -10,  //优先级
          chunks: "all",
          minSize: 0,  //提取的模块最小的大小
          minChunks: 2,  //模块被引用的最小次数
          // maxAsyncRequests: 5,
          // maxInitialRequests: 3,
          // automaticNameDelimiter: '~',  //防止命名冲突
          name: 'vendors',
        },
        common: {
          test: /[\\/]src[\\/]js[\\/]/,
          chunks: "all",
          minSize: 0,  //提取的模块最小的大小
          minChunks: 2,  //模块被引用的最小次数
          // maxAsyncRequests: 5,
          // maxInitialRequests: 3,
          // automaticNameDelimiter: '~',  //防止命名冲突
          name: 'common',
        }
      }
    }
  }
}