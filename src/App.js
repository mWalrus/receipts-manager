import React from 'react'
import Header from './components/header'
import Container from './components/container'
import Receipts from './components/receipts/receipts'
import Menu from './components/menu'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Container
            containerClass="side-menu"
            title="Menu"
            content={<Menu />}
          />
          <Container
            containerClass="center-window"
            title="Receipts"
            content={<Receipts />}
          />
        </div>
      </div>
    )
  }
}
