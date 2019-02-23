import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  static propTypes = {
    searchUser: PropTypes.func.isRequired
  }
  
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
      //子组件调用父组件的方法，通过这种方式，子组件向父组件传递数据
      this.props.searchUser(name);
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