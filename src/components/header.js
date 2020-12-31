import React from 'react'
import { ReactSVG } from 'react-svg'
import Invoice from '../img/invoice.svg'

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <ReactSVG src={Invoice} id="receipt-img" />
        <h1>Receipt Manager</h1>
        <p className="sub-header">Import and manage pdf reciepts</p>
      </div>
    )
  }
}
