import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './redux/store';

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
//初始化渲染
render();

//监听store管理状态的变化，一旦变化就会调用回调函数
store.subscribe(render);