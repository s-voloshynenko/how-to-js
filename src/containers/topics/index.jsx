import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'

import { fetchTopics } from '../../services/content.js';

export default class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: this.props.params.theme,
      topics: []
    };
  }

  componentWillMount() {
    var self = this;

    return fetchTopics(self.props.params.theme)
      .then((response) => {
        if (response.status !== 200) return browserHistory.push('/error/' + response.status);

        self.setState({
          topics: response.data
        });
      });
  }

  render() {
    let { theme } = this.state;

    return (
      <div className="row">
        <div className="nav-bar">
          <Link to="/tree">
            <span className="btn-back">
              Back
            </span>
          </Link>
        </div>
        <div id="topics-container">
          <ul>
            {this.state.topics.map((topic, i) => {
              return <Link key={i + Math.random() * 10000} to={'/topics/' + theme + '/' + (++i)}>
                        <li>
                          <span className="topic-num"> {i} </span>
                          <span className="topic-name"> {topic.name} </span>
                        </li>
                     </Link>;
            })}
          </ul>
        </div>
      </div>
    )
  }
}
