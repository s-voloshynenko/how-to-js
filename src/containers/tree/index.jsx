import React, { Component } from 'react';
import Facet from '../../components/facet/index.jsx';

const Facets = {
  Core: {
    name: 'Core',
    keywords: ['#eventloop', '#es5', '#es6']
  },
  Client: {
    name: 'Client',
    keywords: ['#browser', '#DOM', '#events']
  },
  Server: {
    name: 'Server',
    keywords: ['#nodejs', '#npm', '#protocols']
  },
  Patterns: {
    name: 'Patterns',
    keywords: ['#mvc', '#rest', '#microservice']
  },
  AngularJS1: {
    name: 'AngularJS 1.X',
    keywords: []
  },
  AngularJS2: {
    name: 'AngularJS 2.X',
    keywords: []
  },
  ReactJS: {
    name: 'ReactJS',
    keywords: []
  },
  Authentication: {
    name: 'Authentication',
    keywords: []
  },
  Security: {
    name: 'Security',
    keywords: []
  },
  RabbitMQ: {
    name: 'RabbitMQ',
    keywords: []
  }
};

export default class Tree extends Component {
  render() {
    return (
      <div className="row horizontal-row">
            <div className="row facets-containter lvl-1">
              <div className="center-block" style={{width: '200px'}}>
                <Facet data={Facets.Core} />
              </div>
            </div>
            <div className="row facets-containter lvl-2">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.Client} />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.Patterns} />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.Server} />
                </div>
              </div>
            </div>
            <div className="row facets-containter lvl-3 lvl-client">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.ReactJS} />
                </div>
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.AngularJS1} />
                </div>
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.AngularJS2} />
                </div>
              </div>
            </div>
            <div className="row facets-containter lvl-3 lvl-server">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.Authentication} />
                </div>
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.Security} />
                </div>
                <div className="center-block" style={{width: '200px'}}>
                  <Facet data={Facets.RabbitMQ} />
                </div>
              </div>
            </div>
      </div>
    )
  }
}

/**
 <div className="row facets-containter lvl-3">
    <div className="col-sm-4 col-md-4 col-lg-4">
      <div className="center-block" style={{width: '200px'}}>
        <Facet data={Facets.ReactJS} />
      </div>
      <div className="center-block" style={{width: '200px'}}>
        <Facet data={Facets.AngularJS1} />
      </div>
      <div className="center-block" style={{width: '200px'}}>
        <Facet data={Facets.AngularJS2} />
      </div>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4">
      <div className="center-block" style={{width: '200px'}}>
        <Facet data={Facets.Authentication} />
      </div>
      <div className="center-block" style={{width: '200px'}}>
        <Facet data={Facets.Security} />
      </div>
      <div className="center-block" style={{width: '200px'}}>
        <Facet data={Facets.RabbitMQ} />
      </div>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4">
    </div>
  </div>
 */
