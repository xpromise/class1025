* 下载包
  * npm i gulp-cli -g   //全局安装 在cmd的任意目录中运行全局安装的包
  * npm i gulp --save-dev  //本地安装 安装到当前目录，添加到开发（dev）依赖中
* 工作流程
  1. gulp官网找插件 https://gulpjs.com/plugins/  gulp-插件名称
  2. 下载插件 npm i xxx -D
  3. 引入插件 const xxx = require("gulp-xxx");
  4. 配置插件任务 gulp.task('name', function () {})
  5. 运行插件任务 gulp 任务名称