import React from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";

const Room=()=>{
    
    return(
        <div className='Room'>
            <Navbar />
            <img className='Room-img' src="/assets/images/backgrounds/forest-regular.jpg" alt="room-img"/>
        </div>
    )
}
export default Room