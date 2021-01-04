import React from 'react'
import Item from './item'
import { v4 } from 'uuid'
import { Scrollbars } from 'react-custom-scrollbars'

export default class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items
    }
  }

  render() {
    return (
      <div className={`items ${this.props.visibility}`}>
        <Scrollbars style={{ height: '60vh' }}>
          {this.state.items.map((item) => {
            return <Item item={item} key={v4()} />
          })}
        </Scrollbars>
      </div>
    )
  }
}
