import React from "react";
import './Enemy.css'



const Enemy =({name,img})=> {


    return (
        <div className='enemy'>
            <div >
                <img className='enemy-img' src={img} alt="enemy-img"/>
                {name}
            </div>
        </div>
    )
}
export default Enemy