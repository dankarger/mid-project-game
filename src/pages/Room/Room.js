import React, {useContext} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";
import {GameDataContext} from "../../componenets/GameLogic/GameLogic";
import {PlayerContext} from "../../componenets/gameApp/GameApp";


const Room=({player})=>{
         const currentRoomData = useContext(GameDataContext)
         const currentPlayer = useContext(PlayerContext)
    return(
        <>
            <div className='Room' style={{background:`${currentRoomData.image}`}}>
                <Navbar currentPlayer={currentPlayer} roomNumber={currentRoomData.value}/>
                <div className="Room-img-div">
                    <img className='Room-img' src={currentRoomData.image} alt="room-img"/>
                </div>
                <div className="player--div">
                    <Player player={player} name='chicken-rider'  />
                </div>
                <div className="filler-div">
                </div>
                <div className="enemy-div">
                    <Enemy   enemy={currentRoomData.enemy} />
                </div>
                <ActionMenu />
            </div>
        </>
    )
}
export default Room