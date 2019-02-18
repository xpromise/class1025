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
});

gulp.task('babel', function () {
  //当前任务要执行的回调函数
  return gulp.src('src/js/*.js')      //将要处理的js文件引入进来
    .pipe(babel({   //将引入进来的文件，通过babel插件做语法转换（es6语法转化es5）
      presets: ['@babel/env']  //babel只能将es6模块化语法转换为commonjs语法
    }))
    .pipe(gulp.dest('build/js'))  //输出到指定目录去
})

gulp.task('browserify', function() {
  return gulp.src('build/js/app.js')
    .pipe(browserify())  //将commonjs语法转换成浏览器能识别的语法
    .pipe(rename('built.js'))
    .pipe(gulp.dest('./build/js'))
});

//压缩js
gulp.task('uglify', function() {
  return gulp.src('build/js/built.js')
    .pipe(uglify())  //压缩js代码
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('./dist/js'))
});

//通过gulp js启动， 实际执行的是'babel', 'browserify'任务
gulp.task('js', gulp.series('eslint', 'babel', 'browserify', 'uglify'))  //顺序执行 - 同一时间只能执行一个任务
// gulp.task('js', gulp.parallel('babel', 'browserify'))  //并行执行 - 同一时间执行多个任务