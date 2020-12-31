import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul id="menu-list">
          <li className="menu-item" id={uuidv4()}>
            My receipts
          </li>
          <li className="menu-item" id={uuidv4()}>
            Saved calculations
          </li>
        </ul>
      </div>
    )
  }
}
