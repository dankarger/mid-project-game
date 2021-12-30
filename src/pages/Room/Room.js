import React,{useState,useEffect} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";



const Room=({roomData,player})=>{
    // const [roomNumber,setRoomNumber]=useState(roomData);
    // //
    // useEffect(()=>{
    //     console.log('p',player)
    //     setRoomNumber(roomData)
    //     console.log('enemy,',roomData.enemy)
    // },[roomNumber,player,roomData,roomData])



    return(
        <>
            <div className='Room' style={{background:`${roomData.image}`}}>
                <Navbar roomNumber={roomData.value}/>
                <div className="Room-img-div">
                    <img className='Room-img' src={roomData.image} alt="room-img"/>
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