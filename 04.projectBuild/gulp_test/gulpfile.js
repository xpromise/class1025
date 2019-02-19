/*
  gulpfile.js是gulp的配置文件
 */
//引入gulp模块
const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require("gulp-rename");
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['defaults'] });
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const open = require("open");

//处理html
gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true, //去除空格
      removeComments: true  //删除注释
    }))  //压缩html
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
});

//处理less
gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less({
      plugins: [autoprefix] //自动扩展样式的兼容性前缀
    }))  //将less文件转换成css文件
    .pipe(concat('dist.min.css'))  //合并css文件
    .pipe(cleanCSS({compatibility: 'ie8'}))  //压缩css文件
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload())
});

//注册任务
//语法检查：eslint jshint jslint
//使用 "extends": "eslint:recommended" 来启用推荐的规则
/*
  package.json中修改
    "eslintConfig": {
      "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module"
      }
    }
 */
gulp.task('eslint', () => {
  return gulp.src(['src/js/*.js'])
    .pipe(eslint())  //语法检查
    .pipe(eslint.format())  //将检查出来的语法错误，打印到控制台中
    .pipe(livereload())
});

gulp.task('babel', function () {
  //当前任务要执行的回调函数
  return gulp.src('src/js/*.js')      //将要处理的js文件引入进来
    .pipe(babel({   //将引入进来的文件，通过babel插件做语法转换（es6语法转化es5）
      presets: ['@babel/env']  //babel只能将es6模块化语法转换为commonjs语法
    }))
    .pipe(gulp.dest('build/js'))  //输出到指定目录去
    .pipe(livereload())
})

gulp.task('browserify', function() {
  return gulp.src('build/js/app.js')
    .pipe(browserify())  //将commonjs语法转换成浏览器能识别的语法
    .pipe(rename('built.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(livereload())
});

//压缩js
gulp.task('uglify', function() {
  return gulp.src('build/js/built.js')
    .pipe(uglify())  //压缩js代码
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload())
});

/*
自动编译功能: 监听开发的源文件，一旦文件发生变化，自动启动相应的任务去处理
  1. 在每一个任务后面加上 .pipe(livereload())
  2. 注册watch任务
 */
gulp.task('watch', function () {
  livereload.listen();
  
  connect.server({
    root: 'dist',  //项目的根目录
    livereload: true,  //开启热更新功能，自动的刷新网页
    port: 3000   //端口号
  });
  
  //自动打开浏览器
  open('http://localhost:3000');
  
  gulp.watch(['src/js/*.js'], gulp.series('js'));
  gulp.watch(['src/less/*.less'], gulp.series('less'));
  gulp.watch(['src/index.html'], gulp.series('html'));
})

//通过gulp js启动， 实际执行的是'babel', 'browserify'任务
gulp.task('js', gulp.series('eslint', 'babel', 'browserify', 'uglify'))  //顺序执行 - 同一时间只能执行一个任务
// gulp.task('js', gulp.parallel('babel', 'browserify'))  //并行执行 - 同一时间执行多个任务
gulp.task('default', gulp.parallel('js', 'less', 'html'));
gulp.task('myWatch', gulp.series('default', 'watch'));
