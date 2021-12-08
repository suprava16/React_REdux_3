import { SET_EMAIL } from "../Constant/LoginConstant"
import { SET_PASSWORD } from "../Constant/LoginConstant"

export function setEmail(email){
  return{
    type:SET_EMAIL,
    payload:email
  }
}

export function setPassword(password){
  return{
    type:SET_PASSWORD,
    payload:password
  }
}

export function handleLogin(email,password){
  return ()=>{
    return fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
      alert(result.token)
    })
  }
  }


