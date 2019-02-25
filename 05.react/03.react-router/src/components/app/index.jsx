import React, {Component} from 'react';
import {Link, NavLink, Route, Redirect, Switch} from 'react-router-dom';

import './index.css';

import Home from '../../pages/home';
import About from '../../pages/about';

export default class App extends Component {
  render() {
    // 快捷键 ctrl + alt + l 格式化代码
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*
              Link组件：相当于a标签，不会有a标签的默认行为，能够修改当前的url地址（作用：修改url地址, 并产生浏览历史记录）
              NavLink组件：当前点击的组件，会多一个active类
              */}
              <NavLink className="list-group-item" activeClassName="my-active" to='/about'>About</NavLink>
              <NavLink className="list-group-item" activeClassName="my-active" to='/home'>Home</NavLink>
              {/*<a className="list-group-item myActive" href="/about" aria-current="page">About</a>
              <a className="list-group-item" href="/home">Home</a>*/}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*
                  Route组件：根据当前url变化，与本身path进行匹配，一旦匹配上就自动加载component传入的组件
                  Redirect组件：默认匹配所有路径，将url地址改为to的值（注意：一定是放最后的）
                  Switch组件：其中的路由组件，有且只能匹配上一个（匹配顺序：从上到下）
                  
                  默认路由匹配规则：
                    1. 前端路由所有的匹配，匹配了多少就执行多少
                    2. 解决：想办法只匹配一个
                  
                  to 主动修改url地址
                  path 被动匹配地址
                  
                  组件分类：
                    普通组件
                    路由组件：Route组件中传入component中的组件，这个组件就叫做路由组件，路由组件都有三个属性location/history/match
                */}
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  <Redirect to='/about'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}