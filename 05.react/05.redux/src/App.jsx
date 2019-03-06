import React, {Component} from 'react';
import PropTypes from 'prop-types';

import * as actions from './redux/actions';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  
  state = {
    value: 1
  }
  
  increment = () => {
    const {value} = this.state;
    //创建action
    const action = actions.increment(value);
    //调用dispatch(action)才能触发reducer调用，最终更新状态
    this.props.store.dispatch(action);
  }
  
  decrement = () => {
    const {value} = this.state;
    const action = actions.decrement(value);
    this.props.store.dispatch(action);
  }
  
  incrementIfOdd = () => {
    const {value} = this.state;
    const number = this.props.store.getState();
    if (number % 2 === 1) {
      //创建action
      const action = actions.increment(value);
      //调用dispatch(action)才能触发reducer调用，最终更新状态
      this.props.store.dispatch(action);
    }
  }
  
  incrementAsync = () => {
    setTimeout(() => {
      const {value} = this.state;
      //创建action
      const action = actions.increment(value);
      //调用dispatch(action)才能触发reducer调用，最终更新状态
      this.props.store.dispatch(action);
    }, 1000)
  }
  
  render () {
    const {value} = this.state;
    //读取store对象中状态数据的方法
    const number = this.props.store.getState();
    
    return (
      <div>
        <h2>click {number} times</h2>
        <select onChange={e => this.setState({value: e.target.value})} value={value}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
