import React from 'react'
import "../MyComStyles/upperBar.css"

function upperBar(){
    return(
         <>
          <div className='name-container'>
            <div className='logo'>
                <img
                 style={{
                    height:"200px",
                    padding:"8px"
                 }}
                src="nustLogo.png" alt="error-loading"/>

                <div className='name-of-uni'>
                    <p>National University of Sciences and Technology</p>
                </div>
            </div>
          </div>
         </>
    );
}

export default upperBar;