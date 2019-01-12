/*
  分线程要执行的代码
 */

function fibonacci(num) {
  return num > 2 ? fibonacci(num - 1) + fibonacci(num - 2) : 1;
}

//分线程接受主线程发送的消息
var onmessage = function (ev) {
  console.log(ev);
  //获取主线程发送的消息
  var value = ev.data;
  //开始计算
  var result = fibonacci(value);
  //将计算结果发送给主线程
  postMessage(result);
}