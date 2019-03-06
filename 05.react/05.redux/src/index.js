import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//使用的是容器组件
import App from './containers/App';
import store from './redux/store';
/*
  Provider
    1. 将store对象数据传入该传入的组件
    2. 一旦数据发生变化，重新渲染组件
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
