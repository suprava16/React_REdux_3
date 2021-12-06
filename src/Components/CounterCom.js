import React, { Component } from 'react'

export default class CounterCom extends Component {
  render() {
    return (
      <div>
      <h1>Counter Component</h1>
      <h1>count={this.props.counting.count}</h1>
        <button onClick={this.props.increment}>Add</button>
        <button onClick={this.props.decrement}>Sub</button>
      </div>
    )
  }
}

// component->container->action->constant->reducer->
// combine reducer->create store->provide store to App component->create container
//render your container in app component->define mapStateToProps and mapDispatchToProps in container
//->as a props pass your reducer and evnets to your component
//->by using this.props we can access our state varibales and events 
