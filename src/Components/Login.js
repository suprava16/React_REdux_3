import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    const{login}=this.props
    return (
      <div>
        <input
          type="text"
          placeholder="enter email"
          onChange={(event) => {
            this.props.setEmail(event.target.value)
          }}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(event) => {
            this.props.setPassword(event.target.value)
          }}
        />
        <button onClick={()=>{this.props.handleLogin(login.email,login.password)}}>Login</button>
     
      </div>
    )
  }
}

// component->container(dispatch call)->action(define your event)->define your constants->reducer(perticular switch case executed)->reducerFolder-index.js(combine your reducers)->store->store add in index.js->add your container in your App.js->create reducer variable in mapStateToprops->passing props to container
