import React, { Component } from 'react'
import Login from '../Components/Login'
import { connect } from 'react-redux'
import { setEmail,setPassword ,handleLogin} from '../Actions/LoginAction'
 class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Login {...this.props}/>
      </div>
    )
  }
}

export const mapStateToProps=(store)=>{
return{
login:store.LoginReducer
}
}

export const mapDispatchToProps=(dispatch)=>{
  return{
    setEmail:(email)=>{
      dispatch(setEmail(email))
    },
    setPassword:(password)=>{
      dispatch(setPassword(password))
    },
    handleLogin:(email,password)=>{
      dispatch(handleLogin(email,password))
    },
    

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)