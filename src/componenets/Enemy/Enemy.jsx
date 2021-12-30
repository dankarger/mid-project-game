import React from "react";
import './Enemy.css'



const Enemy =({enemy})=> {


    return (
        <div className='enemy'>
            <div className='player-name'>{enemy.name}</div>
            <div >
                <img className='enemy-img' src={enemy.images[0]} alt="enemy-img"/>
            </div>
            <div className='player-health'>health: {enemy.health}</div>
        </div>
    )
}
export default Enemy