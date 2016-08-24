import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'

import { fetchTopic } from '../../services/content.js';

export default class Topic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicContent: '',
      theme: this.props.theme
    };
  }

  componentWillMount() {
    var self = this;
    console.log('jere')
    return fetchTopic(self.params.theme, self.props.params.id)
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
          <Link to={'/topics/' + this.state.theme}>
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
