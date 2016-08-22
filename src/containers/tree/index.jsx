import React, { Component } from 'react';
import { Link } from 'react-router'

import { facetsData } from '../../assets/data';
import Facet from '../../components/facet/index.jsx';


export default class Tree extends Component {
  render() {
    return (
      <div className="row horizontal-row">
        <div className="row facets-containter lvl-1">
          <div className="center-block">
            <Link to="/topics/core">
              <Facet data={facetsData.Core} />
            </Link>
          </div>
        </div>
        <div className="row facets-containter lvl-2">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="center-block">
              <Facet data={facetsData.Client} />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="center-block">
              <Facet data={facetsData.Patterns} />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="center-block">
              <Facet data={facetsData.Server} />
            </div>
          </div>
        </div>
        <div className="row facets-containter lvl-3 lvl-client">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="center-block">
              <Facet data={facetsData.ReactJS} />
            </div>
            <div className="center-block">
              <Facet data={facetsData.AngularJS1} />
            </div>
            <div className="center-block">
              <Facet data={facetsData.AngularJS2} />
            </div>
          </div>
        </div>
        <div className="row facets-containter lvl-3 lvl-server">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="center-block">
              <Facet data={facetsData.Authentication} />
            </div>
            <div className="center-block">
              <Facet data={facetsData.Security} />
            </div>
            <div className="center-block">
              <Facet data={facetsData.RabbitMQ} />
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
      <div className="center-block">
        <Facet data={facetsData.ReactJS} />
      </div>
      <div className="center-block">
        <Facet data={facetsData.AngularJS1} />
      </div>
      <div className="center-block">
        <Facet data={facetsData.AngularJS2} />
      </div>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4">
      <div className="center-block">
        <Facet data={facetsData.Authentication} />
      </div>
      <div className="center-block">
        <Facet data={facetsData.Security} />
      </div>
      <div className="center-block">
        <Facet data={facetsData.RabbitMQ} />
      </div>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4">
    </div>
  </div>
 */
