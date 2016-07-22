import React, { Component } from 'react';

export default class Facet extends Component {
  constructor (props) {
    super(props);

    this.state = {
      type: this.props.data.type,
      name: this.props.data.name,
      keywords: this.props.data.keywords
    };
  }

  render() {
    return (
      <div className='facet'>
        <div className="facet-name">
          {this.state.name}
        </div>
        <div className="facet-keywords">
          {
            this.state.keywords.map(keyword => {
              return (
                <span key={keyword} className="facet-keyword">
                  {keyword}
                </span>
              );
            })
          }
        </div>
      </div>
    )
  }
}
