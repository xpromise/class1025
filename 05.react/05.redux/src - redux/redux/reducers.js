/*
  根据之前的状态preState和action生成一个新的状态newState
    - preState 之前的状态  来自store保存的
    - action  {type: xxx, data: xxx}
 */

import {INCREMENT, DECREMENT} from './action-types';

//一个reducer管理一种状态数据
function reducer(preState = 0, action) {
  console.log(preState, action);
  switch (action.type) {
    case INCREMENT :
      return preState + action.data;
    case DECREMENT :
      return preState - action.data;
    default :
      return preState;
  }
}

/*

function reducer(preState, action) {
  switch (action.type) {
    default :
      return preState;
  }
}
 */

export default reducer;