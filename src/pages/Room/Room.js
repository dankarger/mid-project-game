import React,{useState,useEffect} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";



const Room=({roomData,player,enemy})=>{
    const [roomNumber,setRoomNumber]=useState(roomData.value);
    //
    useEffect(()=>{
        console.log('p',player)
        setRoomNumber(roomData.value)
        console.log('enemy,',roomData.enemy)
    },[roomNumber,player,roomData.value,roomData.enemy])



    return(
        <>
            <div className='Room' style={{background:`${roomData.image}`}}>
                <Navbar roomNumber={roomNumber}/>
                <div className="Room-img-div">
                    <img className='Room-img' src="/assets/images/backgrounds/forest-regular.jpg" alt="room-img"/>
                </div>
                <div className="player--div">
                    <Player player={player} name='chicken-rider'  />
                </div>
                <div className="filler-div">
                </div>
                <div className="enemy-div">
                    <Enemy   enemy={roomData.enemy} />
                </div>
                <ActionMenu />
            </div>
        </>
    )
}
export default Room