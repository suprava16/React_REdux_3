import React, { Component } from 'react'
import CounterContainer from './Container/CounterContainer'
import LoginContainer from "./Container/LoginContainer"
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <CounterContainer/> */}
        <LoginContainer/>
      </div>
    )
  }
}
