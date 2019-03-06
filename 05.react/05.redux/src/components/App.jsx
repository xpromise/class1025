import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }
  
  state = {
    value: 1
  }
  
  increment = () => {
    const {value} = this.state;
    this.props.increment(+value);
  }
  
  decrement = () => {
    const {value} = this.state;
    this.props.decrement(+value);
  }
  
  incrementIfOdd = () => {
    const {value} = this.state;
    const {number} = this.props;
    if (number % 2 === 1) {
      this.props.increment(+value);
    }
  }
  
  incrementAsync = () => {
    const {value} = this.state;
    this.props.incrementAsync(+value);
  }
  
  render () {
    const {value} = this.state;
    const {number} = this.props;
    
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
