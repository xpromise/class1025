const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    //输出的文件路径
    path: resolve(__dirname, 'build'),
    //文件名称
    filename: './js/[name].[hash:7].js'
  },
  //loader
  module: {
    rules: [
      /*{
        test: /\.js$/, //检测文件是否以.js结尾，如果是就匹配上，如果不是就忽略
        exclude: /(node_modules)/, //排除当前目录下的文件
        use: {  //一旦匹配上，就是用以下loader处理文件
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  //告诉babel如何处理当前文件
          }
        }
      },*/
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
        use: [{
          loader: "style-loader" // 创建style标签，将css添加进去
        }, {
          loader: "css-loader" // 将css导入到js中，成为一个模块（commonjs模块化）
        }, {
          loader: "less-loader" // 将less编译成css
        }]
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
              publicPath: '../build/images' //修改样式文件中url图片路径
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',  //重命名输出文件的名字
      template: './src/index.html'  //模板资源：往引入的模板资源中添加js和css，输出出去
    })
  ],
  //模式
  mode: 'development'
}