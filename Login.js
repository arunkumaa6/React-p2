// import React from 'react';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Password from './password.json';
import Router from './Router'

function Login() {
    const navi=useNavigate()
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")

    function getName(event){
        setName(event.target.value)
    }

    function getPassword(event){
        setPassword(event.target.value)
    }

    function Submit(event){
        event.preventDefault();
        Password.forEach((value)=>{
            if(value.username==name && value.password==password)
            navi("Router")
            else{
                setError('Invalid password')
            }
        })
    }
  return (
    <div>
        <h1>LOGIN</h1>
        <h2>page</h2>
        <form>
            <input type='text' name='name' placeholder='username' onChange={getName}></input><br></br>
            <input type='password' name='password' placeholder='password' onChange={getPassword}></input>
            <p>{error}</p>
            <button onClick={Submit}>submit</button>
        </form>
    </div>
  )
}

export default Login