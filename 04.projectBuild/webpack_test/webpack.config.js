const {resolve} = require('path');

module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    //输出的文件路径
    path: resolve(__dirname, 'build/js'),
    //文件名称
    filename: 'built.js'
  },
  //loader
  module: {
    rules: [
      {
        test: /\.js$/, //检测文件是否以.js结尾，如果是就匹配上，如果不是就忽略
        exclude: /(node_modules)/, //排除当前目录下的文件
        use: {  //一旦匹配上，就是用以下loader处理文件
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  //告诉babel如何处理当前文件
          }
        }
      }
    ]
  },
  //模式
  mode: 'development'
}