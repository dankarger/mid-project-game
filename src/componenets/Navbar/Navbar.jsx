import React from "react";
import './Navbar.css'
import Button from "../utility/Button/Button";
import HealthAnimation from "./HealthAnimation";

const Navbar =({roomNumber,currentPlayer,currentEnemy})=>{

    return (
        <div className='navbar'>
            <div className=' navbar-item player-info'> <img className='avatar-nav' src={currentPlayer.avatar} alt="avatar-img"/>
              <div className='navbar-item'>{currentPlayer.name} <span><i className="fas fa-heart"> </i><HealthAnimation num={currentPlayer.health}/></span></div></div>
              <div> <HealthAnimation num={currentPlayer.health}/></div>
              <div className='navbar-item navbar-room'>Level: {roomNumber}</div>
              <div className='navbar-item'>{currentEnemy.name} <span><i className="fas fa-heart"> </i>{currentEnemy.health}</span></div>
            <div className='navbar-item'><Button className='settings' name='Settings' /></div>
        </div>
    )
}
export default Navbar