import React, {Component} from 'react';
import PubSub from 'pubsub-js';

export default class Search extends Component {
  
  state = {
    name: ''
  }
  
  handleName = e => {
    this.setState({
      name: e.target.value.trim()
    })
  }
  
  search = () => {
    //获取用户输入的搜索名称
    const {name} = this.state;
    if (name) {
      //发布消息
      PubSub.publish('NAME', name);
    }
  }
  
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" onChange={this.handleName}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}