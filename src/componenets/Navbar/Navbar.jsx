import React from "react";
import './Navbar.css'


const Navbar =({roomNumber,currentPlayer})=>{




    return (
        <div className='navbar'>
              <div className='navbar-item'>{currentPlayer.name} <span>{currentPlayer.health}</span></div>
              <div className='navbar-item navbar-room'>Room: {roomNumber}</div>
              <div className='navbar-item'>Enemy <span>Health</span></div>
        </div>
    )
}
export default Navbar