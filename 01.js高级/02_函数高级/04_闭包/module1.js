(function (window) {

  var msg = 'hello atguigu';
  var num = 1;
  
  function showMsg() {
    console.log(msg);
  }
  
  function add() {
    console.log(num++);
  }

  window.module = {
    showMsg: showMsg,
    add: add
  }
  
})(window)