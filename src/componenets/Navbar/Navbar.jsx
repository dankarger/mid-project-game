import React from "react";
import './Navbar.css'
import Button from "../utility/Button/Button";
import HealthAnimation from "./HealthAnimation";
// import {GoSettings} from "react-icons/Go";
// import {IoLogoIonic} from "react-icons/all"


const Navbar =({ roomNumber, currentPlayer, currentEnemy, callback })=>{

    return (
        <div className='navbar'>
            <div className=' navbar-item player-info'> <img className='avatar-nav' src={currentPlayer.avatar} alt="avatar-img"/>
              <div className='navbar-item'>{currentPlayer.name} <span><i className="fas fa-heart"> </i><HealthAnimation num={currentPlayer.health}/>/{currentPlayer.totalHealth}</span></div></div>
              {/*<div> <HealthAnimation num={currentPlayer.health}/></div>*/}
              <div className='navbar-item navbar-room'>Level: {roomNumber}</div>
              <div className='navbar-item'>{currentEnemy.name} <span><i className="fas fa-heart"> </i><HealthAnimation num={currentEnemy.health}/>/{currentEnemy.totalHealth}</span></div>
            <div  ><Button  callback={callback} className='settings' icon={<i className="fas fa-cog"> </i>} /></div>
        </div>
    )
}
export default Navbar


