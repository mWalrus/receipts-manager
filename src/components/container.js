import React from 'react'

export default class Container extends React.Component {
  render() {
    return (
      <div className={`${this.props.containerClass} container`}>
        <h3 className="container-header">{this.props.title}</h3>
        {this.props.content}
      </div>
    )
  }
}
