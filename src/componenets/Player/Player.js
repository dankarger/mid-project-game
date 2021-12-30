import React from "react";
import './Player.css'



const Player =({player})=> {

console.log('player',player)
    return (
        <div className='player'>
                <div className='player-name'>{player.name}</div>
                <img className='player-img' src={player.images[0]} alt="player-img"/>
            <div className='player-health'>health: {player.health}</div>
        </div>
    )
}
export default Player