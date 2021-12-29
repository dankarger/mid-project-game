import React from "react";
import './Navbar.css'


const Navbar =()=>{




    return (
        <div className='navbar'>
              <div className='navbar-item'>Player <span>Health</span></div>
              <div className='navbar-item navbar-room'>Room Number</div>
              <div className='navbar-item'>Enemy <span>Health</span></div>
        </div>
    )
}
export default Navbar