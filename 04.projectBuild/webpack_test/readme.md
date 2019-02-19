* mode模式
  * 开发环境 development
    * 自动编译运行项目、检查语法错误、详细的错误提示等。。。 （能帮助程序员更好的写代码）
  * 生产环境 production
    * 压缩代码、兼容性处理等。。。
  * 开发依赖 devDependencies
    * 项目构建打包需要的依赖
  * 生产依赖 dependencies
    * 项目上线运行时需要的依赖
* 下载
  * npm i webpack webpack-cli -g
  * npm i webpack webpack-cli -D
* webpack的零配置：能够自动编译压缩js代码  
  * 开发环境：webpack ./src/js/app.js -o ./build/js/built.js --mode=development
    * 只将es6模块化转换成浏览器能识别的语法
    * 而其他的es6语法并没有变
  * 生产环境：webpack ./src/js/app.js -o ./build/js/built.js --mode=production
    * 多一个压缩js代码
* 手动配置webpack
  * 配置文件 webpack.config.js   
  * 指令： webpack  会去当前目录读取 webpack.config.js  文件的配置
* 下载指令
  * npm i xxx -D / --save-dev  下载到开发依赖
  * cyarn add xxx --dev   下载到开发依赖
  * npm i xxx -g 全局安装
  * cyarn global add xxx 全局安装  （xuy）
  * 