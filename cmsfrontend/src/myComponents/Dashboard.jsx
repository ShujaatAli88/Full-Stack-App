import React from 'react'
import '../MyComStyles/dashboard.css'
import {AiOutlineBars} from 'react-icons/ai'

function Dashboard() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-">
     <div className='app-logo-header'>
      <div className='logo-src'></div>
      <div className='app-panel' style={{color:"white"}}><i><AiOutlineBars/></i></div>
     </div>
      <div className='nav-right-container'>
        <div className='search-field'></div>
        <div className='right-side-content'></div>
      </div>
   </nav>
    </>
  )
}

export default Dashboard

