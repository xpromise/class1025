import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import MessageDetail from '../message-detail';

export default class Message extends Component {
  
  state = {
    messages: []
  }
  
  componentDidMount () {
    //模拟发送请求
    setTimeout(() => {
      //模拟请求回来的数据
      const messages = [
        {id: '1', content: 'message001'},
        {id: '3', content: 'message003'},
        {id: '5', content: 'message005'},
      ]
      //更新状态
      this.setState({
        messages
      })
      
    }, 1000)
  }
  
  goForward = () => {
    this.props.history.goForward();
  }
  
  goBack = () => {
    this.props.history.goBack();
  }
  
  render () {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((item, index) => (
              <li key={index}>
                <Link to={`/home/message/${item.id}`}>{item.content}</Link> &nbsp;&nbsp;
                <button onClick={() => this.props.history.push(`/home/message/${item.id}`)}>push</button> &nbsp;&nbsp;
                <button onClick={() => this.props.history.replace(`/home/message/${item.id}`)}>replace</button>
              </li>
            ))
          }
        </ul>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>
    )
  }
}