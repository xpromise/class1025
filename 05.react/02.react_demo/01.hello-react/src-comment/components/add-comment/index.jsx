import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddComment extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }
  
  state = {
    name: '',
    content: ''
  }
  
  handleName = e => {
    //获取当前表单的值
    const name = e.target.value.trim();
    //更新状态
    this.setState({
      name
    })
  }
  handleContent = e => {
    //获取当前表单的值
    const content = e.target.value.trim();
    //更新状态
    this.setState({
      content
    })
  }
  
  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value.trim()
    })
  }
  
  handleSubmit = () => {
    //获取收集的表单数据
    const {name, content} = this.state;
    //判断用户输入不能为空
    if (!name || !content) return alert('输入的用户名或评论内容不能为空');
    //添加到app中state
    this.props.addComment({name, content});
    //清空状态数据 和 用户界面显示
    this.setState({
      name: '',
      content: ''
    })
  }
  
  render () {
    const {name, content} = this.state;
    
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" value={name} onChange={e => this.handleChange(e, 'name')}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={e => this.handleChange(e, 'content')}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}