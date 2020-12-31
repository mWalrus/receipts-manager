import React from 'react'
import { v4 } from 'uuid'

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  formatItem(item) {
    if (item.match('Rabatt:')) {
      let split = item.split(' ')
      return (
        <span className="info-item" key={v4()}>
          {split[0] + ' '}
          <span className="total-off">{split[1]}</span>
        </span>
      )
    }
    return (
      <span className="info-item" key={v4()}>
        {item}
      </span>
    )
  }

  render() {
    return (
      <div className="item" key={v4()}>
        <span className="item-name">{this.props.content.name}</span>
        <span className="item-price">{this.props.content.price}</span>
        <div className="additional-info">
          {this.props.content.additional
            ? this.props.content.additional.map((addItem) =>
                this.formatItem(addItem)
              )
            : null}
        </div>
      </div>
    )
  }
}
