/*
  此模块redux核心模块，用来存储状态数据的
  createStore(reducers)  创建store对象的方法
 */
import {createStore} from 'redux';

import reducers from './reducers';

export default createStore(reducers);