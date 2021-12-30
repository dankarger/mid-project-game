import React, {useState} from "react";
import './Enemy.css'



const Enemy =({enemy})=> {
const[currentEnemy,setCurrentEnemy]=useState(enemy)

    useState(()=>{
       setCurrentEnemy(enemy)
    },[])

    return (
        <div className='enemy'>
            <div className='player-name'>{currentEnemy.name}</div>
            <div >
                <img className='enemy-img' src={currentEnemy.images[0]} alt="enemy-img"/>
            </div>
            <div className='player-health'>health: {currentEnemy.health}</div>
        </div>
    )
}
export default Enemy