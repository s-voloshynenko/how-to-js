import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'

import { fetchTopics } from '../../services/content.js';

export default class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
              return <li key={i}>
                      <span className="topic-num"> {i + 1} </span>
                      <span className="topic-name"> {topic.name} </span>
                     </li>; 
            })}
          </ul>
        </div>
      </div>
    )
  }
}
