import React from "react";
import './Player.css'



const Player =({name,img})=> {


    return (
        <div className='player'>

                <img className='player-img' src={img} alt="player-img"/>
                {name}

        </div>
    )
}
export default Player