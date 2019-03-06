/*
  用来创建action对象工厂函数模块
    - action  {type: xxx, data: xxx}
    - 工厂函数  (data) => ({type: xxx, data})
 */

import {INCREMENT, DECREMENT} from './action-types';
//同步action creators  返回值是一个action对象
export const increment = value => ({type: INCREMENT, data: value});

export const decrement = value => ({type: DECREMENT, data: value});

//异步action creators  返回值是一个函数
export const incrementAsync = value => {
  // dispatch ：就是store对象的dispatch
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(value));
    }, 1000)
  }
}

