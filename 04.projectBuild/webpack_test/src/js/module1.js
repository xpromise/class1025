
function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

/*
  es模块化语法：
    暴露：
      统一暴露
      分别暴露
      默认暴露
 */
// 统一暴露
export {
  add,
  mul
}
