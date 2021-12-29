import React from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";

const Room=()=>{
    
    return(
        <div className='Room' style={{background:'/assets/images/backgrounds/forest-regular.jpg'}}>
            <Navbar />
            <div className="Room-img-div">
                <img className='Room-img' src="/assets/images/backgrounds/forest-regular.jpg" alt="room-img"/>

            </div>
            <ActionMenu />
        </div>
    )
}
export default Room