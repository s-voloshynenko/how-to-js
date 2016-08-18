import React, { Component } from 'react';

import { Link } from 'react-router'

export default class Intro extends Component {
  render() {
    return (
      <div className="row">
        <a href="https://github.com/s-voloshynenko/js-in-the-wild">
          <span className="logo-github">
          </span>
        </a>
        <div className="col-xs-5 col-sm-5 col-md-5 col-xs-offset-3 col-sm-offset-3 col-md-offset-3" id="intro-container">
          <h3 className="bungee-header">
            {
              'Hello here!'
            }
          </h3>
          {
            `This is a place, that was created
            for the love of JavaScript. Make sure you know enough about JS.`
          }
          <Link to="/tree">
            <span className="intro-continue-btn">
              Continue..
            </span>
          </Link>
        </div>
      </div>
    )
  }
}
