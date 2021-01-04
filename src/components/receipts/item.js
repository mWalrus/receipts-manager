import React from 'react'
import CalcContext from './calc-context'

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.item = this.props.item
  }

  generateAdditionalItems() {
    return this.item.additional.map((item) => {
      if (item.title === 'Rabatt') {
        return (
          <span className="info-item">
            {`${item.title}: `}
            <span className="total-off">{item.body}</span>
          </span>
        )
      }
      return <span className="info-item">{`${item.title}: ${item.body}`}</span>
    })
  }

  render() {
    return (
      <CalcContext.Consumer>
        {(calc) => {
          return (
            <div
              className="item"
              onClick={calc.mode ? () => calc.callback(this.item.price) : null}
            >
              <span className="item-name">{this.item.name}</span>
              <span className="item-price" value={this.item.price}>
                {this.item.price}
              </span>
              <div className="additional-info">
                {this.generateAdditionalItems()}
              </div>
            </div>
          )
        }}
      </CalcContext.Consumer>
    )
  }
}
