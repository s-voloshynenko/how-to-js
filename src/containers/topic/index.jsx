import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'

import { fetchTopic } from '../../services/content.js';

export default class Topic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
      theme: this.props.params.theme
    };
  }

  componentWillMount() {
    var self = this;

    return fetchTopic(self.props.params.theme, self.props.params.id)
      .then((response) => {
        if (response.status !== 200) return browserHistory.push('/error/' + response.status);

        self.setState({
          topic: response.data
        });
      });
  }

  render() {
    return (
      <div id="topic-container" className="row">
        <div className="nav-bar">
          <Link to={'/topics/' + this.state.theme}>
            <span className="btn-back">
              Back
            </span>
          </Link>
        </div>
        <div>
          <div className="content">
            <h1 className="topic-header">
              {this.state.topic.header}
            </h1>
            <div className="topic-content">
              {this.state.topic.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
