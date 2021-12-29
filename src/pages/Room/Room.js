import React,{useState} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";
import {EnemyData} from "../../Data/Data";
import {Character} from "../../Data/Data";

const Room=()=>{
    const [room,setRoom]=useState();




    return(
        <div className='Room' style={{background:'/assets/images/backgrounds/forest-regular.jpg'}}>
            <Navbar />
            <div className="Room-img-div">
                <img className='Room-img' src="/assets/images/backgrounds/forest-regular.jpg" alt="room-img"/>
            </div>
            <div className="player-div">
                <Player img={Character["chicken"].images[0]} name='chicken-rider'  />
            </div>
            <div className="enemy-div">
                <Enemy name='deer' img={EnemyData['deer'].images[0]} />
            </div>

            <ActionMenu />
        </div>
    )
}
export default Room