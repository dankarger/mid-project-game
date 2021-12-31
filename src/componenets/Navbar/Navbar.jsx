import React from "react";
import './Navbar.css'
import Button from "../utility/Button/Button";

const Navbar =({roomNumber,currentPlayer,currentEnemy})=>{




    return (
        <div className='navbar'>
              <div className='navbar-item'>{currentPlayer.playerName} <span>{currentPlayer.health}</span></div>
              <div className='navbar-item navbar-room'>Room: {roomNumber}</div>
              <div className='navbar-item'>{currentEnemy.name} <span>{currentEnemy.health}</span></div>
            <div className='navbar-item'><Button className='settings' name='Settings' /></div>
        </div>
    )
}
export default Navbar