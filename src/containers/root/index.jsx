import React, { Component } from 'react';

export default class Root extends Component {
  render() {
    return (
      <div id="root-container">
        {this.props.children}
      </div>
    )
  }
}
