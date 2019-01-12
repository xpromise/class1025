(function (window) {

  var msg = 'hello atguigu';
  var num = 1;
  
  function showMsg() {
    console.log(msg);
  }
  
  function add() {
    console.log(num++);
  }

  window.showMsg = showMsg;
  window.add = add;
  
})(window)