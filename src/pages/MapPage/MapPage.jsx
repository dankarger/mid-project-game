import React from "react";
import './MapPage.css'



const MapPage =({callback,currentRoom})=> {


    return (
        <div className='map'>
        <h2>Current room:{currentRoom.value}</h2>
            <button onClick={()=>{callback(2)}} value='2' >{currentRoom.name} </button>

        </div>
    )
}
export default MapPage