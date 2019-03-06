/*
  用来创建action对象工厂函数模块
    - action  {type: xxx, data: xxx}
    - 工厂函数  (data) => ({type: xxx, data})
 */

import {INCREMENT, DECREMENT} from './action-types';

export const increment = value => ({type: INCREMENT, data: value});

export const decrement = value => ({type: DECREMENT, data: value});