import React, {Component} from 'react';

export default class App extends Component {
  state = {
    number: 0,
    value: 1
  }
  
  increment = () => {
    const {number, value} = this.state;
    this.setState({
      number: number + +value
    })
  }
  
  decrement = () => {
    const {number, value} = this.state;
    this.setState({
      number: number - +value
    })
  }
  
  incrementIfOdd = () => {
    const {number, value} = this.state;
    if (number % 2 === 1) {
      this.setState({
        number: number + +value
      })
    }
  }
  
  incrementAsync = () => {
    setTimeout(() => {
      const {number, value} = this.state;
      this.setState({
        number: number + +value
      })
    }, 1000)
  }
  
  render () {
    const {number, value} = this.state;
    
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
