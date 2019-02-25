import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Carousel } from 'antd';
// import 'antd/dist/antd.min.css';
//按需加载 -

ReactDOM.render(
  <div style={{margin: 20}}>
    <Button type='primary'>按钮</Button>
    <Button type='danger'>按钮</Button>
    <Button type="primary" loading>
      Loading...
    </Button>
  
    <div style={{width: 500, height: 380}}>
      <Carousel autoplay dots>
        <div><img style={{width: 500, height: 380}} src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1470861717,2221031930&fm=85&s=28D9A1468E8121761340798A03003094" alt=""/></div>
        <div><img style={{width: 500, height: 380}} src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1470861717,2221031930&fm=85&s=28D9A1468E8121761340798A03003094" alt=""/></div>
        <div><img style={{width: 500, height: 380}} src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1470861717,2221031930&fm=85&s=28D9A1468E8121761340798A03003094" alt=""/></div>
        <div><img style={{width: 500, height: 380}} src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1470861717,2221031930&fm=85&s=28D9A1468E8121761340798A03003094" alt=""/></div>
        <div><img style={{width: 500, height: 380}} src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1470861717,2221031930&fm=85&s=28D9A1468E8121761340798A03003094" alt=""/></div>
        <div><img style={{width: 500, height: 380}} src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1470861717,2221031930&fm=85&s=28D9A1468E8121761340798A03003094" alt=""/></div>
      </Carousel>
    </div>
  </div>
  , document.getElementById('app'));