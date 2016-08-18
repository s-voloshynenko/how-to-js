import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Root extends Component {
  render() {
    return (
      <div id="root-container">
        <ReactCSSTransitionGroup
          component="div"
          transitionName="page-transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={400}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
