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

    return fetchTopics('core')
      .then((data) => {
        if (!data.status) return browserHistory.push('/'); // TODO: 503 and 404 pages

        self.setState({
          topics: data.topics
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
