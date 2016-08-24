import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'

import { fetchTopic } from '../../services/content.js';

export default class Topic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicContent: '',
      referrer: this.props.referrer
    };
  }

  componentWillMount() {
    var self = this;

    return fetchTopic(self.props.params.topic)
      .then((response) => {
        if (response.status !== 200) return browserHistory.push('/error/' + response.status);

        self.setState({
          topicContent: response.data
        });
      });
  }

  render() {
    return (
      <div className="row">
        <div className="nav-bar">
          <Link to={this.state.referrer}>
            <span className="btn-back">
              Back
            </span>
          </Link>
        </div>
        <div id="topic-container">
          {this.state.topicContent}
        </div>
      </div>
    )
  }
}
