/*
  根据之前的状态preState和action生成一个新的状态newState
    - preState 之前的状态  来自store保存的
    - action  {type: xxx, data: xxx}
 */

function reducer(preState = 0, action) {
  console.log(preState, action);
  switch (action.type) {
    case 'INCREMENT' :
      return preState + action.data;
    case 'DECREMENT' :
      return preState - action.data;
    default :
      return preState;
  }
}

export default reducer;