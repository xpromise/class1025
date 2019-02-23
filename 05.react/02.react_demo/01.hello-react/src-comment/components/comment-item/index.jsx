import React, {Component} from 'react';
import PropTypes from 'prop-types';

//引入样式
import './index.css';

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    delComment: PropTypes.func.isRequired
  }
  
  handleDel = () => {
    //{comment : xxx} 解构赋值，解构comment并重命名为xxx
    //{comment : {name}} 解构赋值，解构comment并进一步结构得到其中的name
    const {comment : {name}, index, delComment} = this.props;
    // const {name} = comment;
    //让用户确认是否删除当前评论
    //在react脚手架中未定义的变量不允许使用（常用的变量除外：window、console、alert...）
    if (window.confirm(`你确认要删除${name}的评论吗?`)) {
      //确认删除 - 最终目的就是删除对应的状态数据
      //获取当前下标
      delComment(index);
    }
  }
  
  render () {
    const {name, content} = this.props.comment;
    
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.handleDel}>删除</a>
        </div>
        <p className="user"><span >{name}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}