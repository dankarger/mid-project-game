import React from "react";
import './Enemy.css'



const Enemy =({name,img})=> {


    return (
        <div className='enemy'>
            <div className={name}>
                <img className='enemy-img' src={img} alt="enemy-img"/>
                {name}
            </div>
        </div>
    )
}
export default Enemy