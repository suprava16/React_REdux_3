import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterCom from "../Components/CounterCom"
import { increment, decrement } from "../Actions/CounterAction"
class CounterContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <CounterCom {...this.props}/>
      </div>
    )
  }
}

//add reducuer variable
export const mapStateToProps = (store) => {
  return {
    counting: store.CounterReducer
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: ()=>{
      dispatch(decrement())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (CounterContainer)

