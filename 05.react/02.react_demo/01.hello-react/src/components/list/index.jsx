import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './index.css';

export default class List extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  
  state = {
    isFirstView: true,
    isLoading: false,
    error: null,
    success: null
  }
  
  //需要更新页面，越快越好
  componentWillReceiveProps ({name}) {
    //发送请求之前，将状态改变为loading
    this.setState({
      isLoading: true,
      isFirstView: false
    })
    //发送ajax请求
    axios.get(`https://api.github.com/search/users?q=${name}`)
      .then(res => {
        //获取请求数据
        const result = res.data.items.map(item => ({name: item.login, url: item.html_url, image: item.avatar_url}));
        //更新状态
        this.setState({
          success: result,
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({
          error: '网络不稳定，请刷新试试',
          isLoading: false
        })
      })
    
  }
  
  render () {
    const {isFirstView, isLoading, error, success} = this.state;
    
    if (isFirstView) {
      return <h1>Enter name to search</h1>
    } else if (isLoading) {
      return <h1>Loading...</h1>
    } else if (success) {
      return <div>
        {
          success.map((item, index) => <div className="card" key={index}>
            <a href={item.url} target="_blank">
              <img src={item.image} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{item.name}</p>
          </div>)
        }
      </div>
    } else {
      return <h1>{error}</h1>
    }
  }
}