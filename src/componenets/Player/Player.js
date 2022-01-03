import React from "react";
import './Player.css'



const Player =({player})=> {


    return (
        <div className='player'>
                <div className='player-name'>{player.name}</div>
                <img className='player-img' src={player.currentImage} alt="player-img"/>
            {/*<div className='player-health'><i className="fas fa-heart"> </i>{player.health}</div>*/}
        </div>
    )
}
export default Player