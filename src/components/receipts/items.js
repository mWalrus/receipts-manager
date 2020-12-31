import React from 'react'
import Item from './item'

export default class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items
    }
  }

  render() {
    return (
      <div className={`items ${this.props.toggle}`}>
        {this.state.items.map((item) => {
          return <Item content={item} />
        })}
      </div>
    )
  }
}
