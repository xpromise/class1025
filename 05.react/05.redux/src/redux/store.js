/*
  此模块redux核心模块，用来存储状态数据的
  createStore(reducers)  创建store对象的方法
 */
import {createStore, applyMiddleware} from 'redux';
//让redux支持异步编程，要求异步请求在action creator中完成
import thunk from 'redux-thunk';
// 可能插件会报错， 将redux版本降为 3.7
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers';
/*
  store.dispatch(action) 更新状态数据 --> const data = reducers(preState, action)  ---> 更新store数据
  store.getState() 获取状态数据
  store.subscribe() 监听状态数据变化
 */
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));