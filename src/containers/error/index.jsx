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
          {this.state.code}
        </div>
      </div>
    )
  }
}
