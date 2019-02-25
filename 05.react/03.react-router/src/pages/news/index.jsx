import React, {Component} from 'react';

export default class News extends Component {
  state = {
    news: ['News001', 'News003', 'News005']
  }
  
  render () {
    return (
      <ul>
        {
          this.state.news.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    )
  }
}