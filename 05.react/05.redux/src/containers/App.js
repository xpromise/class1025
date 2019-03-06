import {connect} from 'react-redux';
//引入UI组件
import App from '../components/App';

import {increment, decrement, incrementAsync} from '../redux/actions';

//传入state: 就是store管理的状态数据
//内部会调用当前函数，得到一个对象，以props方式传入到UI中
const mapStateToProps = (state) => {
  return {
    number: state
  }
}

//dispatch: 就是store对象的更新数据方法
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(increment(value));
    },
    decrement: (value) => {
      dispatch(decrement(value));
    }
  }
}

//暴露出去容器组件
/*export default connect(
  mapStateToProps,   //将状态数据以props方法传入到UI组件中
  mapDispatchToProps  //将操作状态数据的方法以props方法传入到UI组件中
)(App);*/

export default connect(
  state => ({number: state}),   //将状态数据以props方法传入到UI组件中
  {increment, decrement, incrementAsync}  //将操作状态数据的方法以props方法传入到UI组件中
)(App);