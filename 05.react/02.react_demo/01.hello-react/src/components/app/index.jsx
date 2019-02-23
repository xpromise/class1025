//引入React的依赖
import React, {Component} from 'react';

//引入其他组件
import AddComment from '../add-comment';
import CommentsList from '../comments-list';

export default class App extends Component {
  render () {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <AddComment />
          <CommentsList />
        </div>
      </div>
    )
  }
}