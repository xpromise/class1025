* mode模式
  * 开发环境 development
    * 自动编译运行项目、检查语法错误、详细的错误提示等。。。 （能帮助程序员更好的写代码, 在内存中编译运行，没有任何文件输出）
  * 生产环境 production
    * 压缩代码、兼容性处理等。。。（生成打包后的项目，提供项目上线使用）
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


  {
    "name": "webpack_test",   //包名，与npm下载相关。注意不能与下载的包名重复
    "version": "1.0.0",      // 1 大版本  0 小的功能的变化 0 bug修复
    "description": "* mode模式\r   * 开发环境 development\r     * 自动编译运行项目、检查语法错误、详细的错误提示等。。。 （能帮助程序员更好的写代码）\r   * 生产环境 production\r     * 压缩代码、兼容性处理等。。。\r   * 开发依赖 devDependencies\r     * 项目构建打包需要的依赖\r   * 生产依赖 dependencies\r     * 项目上线运行时需要的依赖\r * 下载\r   * npm i webpack webpack-cli -g\r   * npm i webpack webpack-cli -D",
    "main": "index.js",  //项目入口文件
    "scripts": {   //启动项目的指令
      "test": "echo \"Error: no test specified\" && exit 1",   // npm run test 
      "start": "webpack-dev-server" // npm start
    },
    "devDependencies": {  //开发依赖
    },  
    "dependencies": {  //生成依赖
    }
  }