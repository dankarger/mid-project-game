import React from "react";
import './MapPage.css'



const MapPage =({callback,currentRoom})=> {


    return (
        <div className='map'>
        <h2>Current room:{currentRoom.value}</h2>
            <div className="row">
                <button onClick={()=>{callback(4)}} value='2' >Room 3 </button>
                <button onClick={()=>{callback(4)}} value='2' >Room 3 </button>
                <button onClick={()=>{callback(4)}} value='2' >Room 3 </button>
            </div>
            <div className="row">
                <button onClick={()=>{callback(3)}} value='2' >Room 2 </button>
                <button onClick={()=>{callback(3)}} value='2' >Room 2 </button>
                <button onClick={()=>{callback(3)}} value='2' >Room 2 </button>
            </div>
            <div className="row">
                <button onClick={()=>{callback(2)}} value='2' >Room 2 </button>
                <button onClick={()=>{callback(2)}} value='2' >Room 2 </button>
            </div>
            <div className="row">
                <button onClick={()=>{callback(1)}} value='2' > Room1  </button>
            </div>


        </div>
    )
}
export default MapPage