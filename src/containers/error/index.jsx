import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'

export default class Error extends Component {
  componentWillMount() {
    this.setState({
      code: this.props.params.code
    });
  }

  render() {
    return (
      <div className="row">
        <div id="error-container">
          <div className="row">
            <div className="code-num">
              {this.state.code}
            </div>
            <div className="code-description">
              {this.state.code == 404 &&
                'Hey here, seems this content doesn\'t exist.'
              }
              {this.state.code == 503 &&
                'Hey here, seems this content is unavailable at the moment.'
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
