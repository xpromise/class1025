/*
  此模块redux核心模块，用来存储状态数据的
  createStore(reducers)  创建store对象的方法
 */
import {createStore} from 'redux';

import reducers from './reducers';
/*
  store.dispatch(action) 更新状态数据 --> const data = reducers(preState, action)  ---> 更新store数据
  store.getState() 获取状态数据
  store.subscribe() 监听状态数据变化
 */
export default createStore(reducers);