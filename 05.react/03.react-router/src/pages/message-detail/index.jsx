import React, {Component} from 'react';

export default class MessageDetail extends Component {
  state = {
    details: [
      {id: '1', title: 'message001', content: 'message content001'},
      {id: '3', title: 'message003', content: 'message content003'},
      {id: '5', title: 'message005', content: 'message content005'},
    ]
  }
  
  render () {
    const {id} = this.props.match.params;
    console.log(id);  //注意是一个字符串类型
    //find方法找返回值为true的值，一旦找到就不在遍历
    const message = this.state.details.find(item => item.id === id)
    
    return (
      <ul>
        <li>ID: {message.id}</li>
        <li>Title: {message.title}</li>
        <li>Description: {message.content}</li>
      </ul>
    )
  }
}