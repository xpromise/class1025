import React from 'react';
import ReactDOM from 'react-dom';
//yarn add react-router-dom
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';

//使用react-router第一步，将App包裹一层BrowserRouter组件

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('app'));