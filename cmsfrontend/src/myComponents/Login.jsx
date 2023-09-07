import React from "react";
import "../MyComStyles/login.css"
import { RiLoginCircleFill } from 'react-icons/ri';
import { Link} from 'react-router-dom';
import UpperBar from './UpperBar'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
  const navigate = useNavigate("")
  const [Email , setEmail]  = useState("")
  const [Password, setPassword] = useState("")
 
  const login_Button = async(e)=>{
    e.preventDefault();
    console.log(Email)
    console.log(Password)
    
  try{
    const loginData = await fetch("http://127.0.0.1:5000/login",
    {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body : JSON.stringify({Email , Password})  
    }
    )

      const data_readable = await loginData.json()
      console.log(data_readable)
      if(data_readable.Message){
       navigate("/dashboard")
       alert(data_readable.Message +" Press me to Continue")
      }
      else
        alert("Check Email Or Password and Try Again...")
      }

   catch(error){
    console.log("Fetch error:", error);
   }
  }
   return(
    <>
    <UpperBar/>
   <form className="form-login">

   <div className="mb-3">
    <div className="log-name">
        <span
        style={{
            color:"green",
            fontWeight:"bold",
            fontFamily:"cursive"
          }}
        >Login</span>
         <span 
         style={{marginLeft :"10px"
         ,fontSize:"40px",
         color:"pink"
}}
         >
            <RiLoginCircleFill/>
        </span>
    </div>
      <input type="email" className="form-control"
      value={Email}
       onChange={(e)=>{
        setEmail(e.target.value)
       }}
      placeholder="Email Address"/> 
    </div>
    <div className="mb-3">
      <input type="password" className="form-control" 
      value={Password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      placeholder="Password"/>
    </div>

    <div style={{
    textAlign:"left"
    }}>
    <button type="submit" className="btn btn-primary"  onClick={login_Button}>Login</button>
    </div>
    <div style={{
        textAlign:"left"
    }}>
    <Link to='/signup' 
     style={{
        fontSize:"16px",
        textDecoration:"none",
        fontFamily:"cursive"
     }}

     className="link-of-signup"
    >
        New user? SignUp Here
    </Link>
    </div>
   </form>
    </>
   );
}

export default Login;