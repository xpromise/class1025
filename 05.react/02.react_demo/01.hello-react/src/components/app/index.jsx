import React, {Component} from 'react';

import logo from './logo.svg';
import './index.css';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>React第一个脚手架应用</h1>
        <img className="logo" src={logo} alt="logo"/>
      </div>
    )
  }
}

// export default App;