import React from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import {EnemyData} from "../../Data/Data";

const Room=()=>{
    
    return(
        <div className='Room' style={{background:'/assets/images/backgrounds/forest-regular.jpg'}}>
            <Navbar />
            <div className="Room-img-div">
                <img className='Room-img' src="/assets/images/backgrounds/forest-regular.jpg" alt="room-img"/>
            </div>
            <div className="player-div">
                player
            </div>
            <div className="enemy-div">
                <Enemy name='deer' img='/assets/images/enemies/deer1.png' />
            </div>
            <ActionMenu />
        </div>
    )
}
export default Room