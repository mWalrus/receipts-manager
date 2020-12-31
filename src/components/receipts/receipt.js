import React from 'react'
import { v4 } from 'uuid'
import Items from './items'

export default class Receipt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minimize: false
    }
  }

  render() {
    return (
      <div className="receipt" key={v4()}>
        <div className="receipt-head">
          <div className="controls">
            <span className="control edit" title="Edit">
              /
            </span>
            <span
              className="control minimize"
              title={this.state.minimize ? 'Maximize' : 'Minimize'}
              onClick={() => this.setState({ minimize: !this.state.minimize })}
            >
              {this.state.minimize ? '☐' : '—'}
            </span>
            <span className="control close" title="Close">
              ✕
            </span>
          </div>
          <h4 className="store">{this.props.receipt.store}</h4>
          <p className="total">{`Total: ${this.props.receipt.total} SEK`}</p>
        </div>
        <Items
          items={this.props.receipt.items}
          toggle={this.state.minimize ? 'hide' : 'show'}
        />
      </div>
    )
  }
}
