import React from 'react'
import Items from './items'
import CalcContext from './calc-context'

export default class Receipt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minimize: false,
      calcMode: false,
      totCalcPrice: 0
    }
    this.receipt = this.props.receipt
  }

  calculate(itemPrice) {
    const parsedPrice = parseFloat(itemPrice)
    this.setState({
      totCalcPrice: Math.round((this.state.totCalcPrice += parsedPrice))
    })
  }

  render() {
    return (
      <div className="receipt">
        <div className="receipt-head">
          <div className="controls">
            <span
              className={`control calculate ${
                this.state.calcMode ? 'on' : null
              }`}
              title="Calculate"
              onClick={() =>
                this.setState({
                  calcMode: !this.state.calcMode,
                  totCalcPrice: 0
                })
              }
            >
              /
            </span>
            <span
              className="control minimize"
              title={this.state.minimize ? 'Maximize' : 'Minimize'}
              onClick={() => this.setState({ minimize: !this.state.minimize })}
            >
              {this.state.minimize ? '☐' : '—'}
            </span>
            <span
              className="control close"
              title="Close"
              id={this.receipt.id}
              onClick={this.props.remove}
            >
              ✕
            </span>
          </div>
          <h4 className="store">{this.receipt.content.store}</h4>
          <p className="total">{`Total: ${this.receipt.content.total} SEK`}</p>
        </div>
        <CalcContext.Provider
          value={{
            mode: this.state.calcMode,
            callback: this.calculate.bind(this)
          }}
        >
          <Items
            items={this.receipt.content.items}
            visibility={this.state.minimize ? 'hide' : 'show'}
          />
        </CalcContext.Provider>
        {this.state.calcMode ? (
          <div className="calc-container">
            <span id="calc-total">{`Calculated total: ${this.state.totCalcPrice}`}</span>
          </div>
        ) : null}
      </div>
    )
  }
}
