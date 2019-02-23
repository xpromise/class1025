import React, {Component} from 'react';

import Search from '../search';
import List from '../list';

export default class App extends Component {
  state = {
    name: ''
  }
  
  //更新name的方法
  searchUser = name => {
    this.setState({name});
  }
  
  render () {
    return (
      <div className="container">
        <Search searchUser={this.searchUser}/>
        <List name={this.state.name}/>
      </div>
    )
  }
}