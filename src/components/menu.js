import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul id="menu-list">
          <li className="menu-item" key={uuidv4()}>
            Import receipts
          </li>
          <li className="menu-item" key={uuidv4()}>
            Saved receipts
          </li>
          <li className="menu-item" key={uuidv4()}>
            Saved price calculations
          </li>
        </ul>
      </div>
    )
  }
}
