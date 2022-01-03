import React from "react";
import './Enemy.css'



const Enemy =({enemy})=> {
    return (
        <div className='enemy'>
            <div className='player-name'>{enemy.name}</div>
            <div >
                <img className='enemy-img' src={enemy.currentImage} alt="enemy-img"/>
            </div>
            {/*<div className='player-health'><i className="fas fa-heart"> </i> {enemy.health}</div>*/}
        </div>
    )
}
export default Enemy