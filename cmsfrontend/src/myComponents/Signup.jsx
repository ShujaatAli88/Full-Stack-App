import React from 'react';
import "../MyComStyles/signup.css"
import { BiSolidUserCheck } from 'react-icons/bi'
import UpperBar from './UpperBar';

function Signup() {
  return (
    <>
    <UpperBar/>
    <div className='main-container'>
  <form class="px-1 py-1">
    <div className="px-2 py-2">
      <div id='regis'>
      <span style={{
        color:"green",
        fontWeight:"bold",
        fontFamily:"cursive"
      }}> 
        Sign Up
      </span>
      <span style={{marginLeft :"10px"
                    ,fontSize:"40px",
                    color:"green"
    }}><BiSolidUserCheck/></span>
      <span>
      
      </span>
      </div>      
    </div>
  <div className="mb-3">
      <input type="name" className="form-control"  placeholder="First Name"/>
    </div>
    <div class="mb-3">
      <input type="name" className="form-control" placeholder="Last Name"/>
    </div>
    <div class="mb-3">
      <input type="number" className="form-control" placeholder="Contact"/>
    </div>
    <div class="mb-3">
      <input type="email" className="form-control" placeholder="Email"/>
    </div>
    <div class="mb-3">
      <input type="text" className="form-control" placeholder="Permenant Address"/>
    </div>
    <div class="mb-3">
      <input type="password" className="form-control" placeholder="Password"/>
    </div>
    <div className="btn-container">
    <button type="submit" className="btn btn-primary">Sign in</button>
    <button type="submit" className="btn btn-primary" id='nextBtn'>Clear</button>
    </div>
  </form>
    </div>
    </>
  );
}

export default Signup;
