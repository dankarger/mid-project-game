import React from "react";
import './Navbar.css'
import Button from "../utility/Button/Button";
import {AVATARS} from "../../Data/Data";

const Navbar =({roomNumber,currentPlayer,currentEnemy})=>{




    return (
        <div className='navbar'>
            <div className='navbar-item player-info'> <img className='avatar-nav' src={currentPlayer.avatar} alt="avatar-img"/>
              <div className='navbar-item'>{currentPlayer.name} <span>{currentPlayer.health}</span></div></div>
              <div className='navbar-item navbar-room'>Room: {roomNumber}</div>
              <div className='navbar-item'>{currentEnemy.name} <span>{currentEnemy.health}</span></div>
            <div className='navbar-item'><Button className='settings' name='Settings' /></div>
        </div>
    )
}
export default Navbar