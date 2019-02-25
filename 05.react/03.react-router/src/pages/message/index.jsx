import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
  
  render () {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((item, index) => (
              <li>
                <Link to={`/home/message/${item.id}`}>{item.content}</Link> &nbsp;&nbsp;
                <button>push</button> &nbsp;&nbsp;
                <button>replace</button>
              </li>
            ))
          }
        </ul>
        <button>前进</button>
        <button>后退</button>
      </div>
    )
  }
}