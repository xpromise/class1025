import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './redux/store';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

//监听store管理状态的变化，一旦变化就会调用回调函数
store.subscribe(() => {
  //更新页面
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})