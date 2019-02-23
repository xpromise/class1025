//因为ReactDOM依赖React，所以需要引用
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(<App />, document.getElementById('app'));