import React, {useContext, useEffect, useState} from "react";
import './MapPage.css'
import Button from "../../componenets/utility/Button/Button";
import {GameDataContext} from "../../componenets/GameLogic/GameLogic";
import {useSpring, animated, config} from "react-spring";

const MapPage =({callback})=> {
    const currentRoomData = useContext(GameDataContext);
    const[activeRoom,setActiveRoom] = useState()

    useEffect(()=>{
        setActiveRoom(currentRoomData.value===0 ? 1 : currentRoomData.value + 1 )
    },[currentRoomData.value])
    useEffect(()=>{
    })

    const styles = useSpring({
        loop:true,

        config:{config:config.molasses,duration:1000},
        to:{scale:0.8},
        from:{scale:1.1},
        // onRest:()=>{PlaySound(SoundsList["click1"])}
    })

    return (
        <div className='map'>
        <h1>Current Level:{currentRoomData.value}</h1>
            <div className="rooms-div">
                <animated.div style={activeRoom===5?styles:{}} className="row">
                    <Button disabled={activeRoom!==5} className={activeRoom>5?'map-button button5 finished':'map-button button5'} callback={()=>{callback('boss')}} value='5' name='Boss' />
                </animated.div>
                <animated.div style={activeRoom===4?styles:{}} className="row">
                    <Button disabled={activeRoom!==4} className={activeRoom>4?'map-button button4 finished':'map-button button4'} callback={()=>{callback('room4')}} value='4' name='Level 4' />
                </animated.div>
                <animated.div style={activeRoom===3?styles:{}} className="row">
                    <Button  disabled={activeRoom!==3} className={activeRoom>3?'map-button button3 finished':'map-button button3'} callback={()=>{callback('room3')}} value='3' name='Level 3' />
                </animated.div>
                <animated.div style={activeRoom===2?styles:{}} className="row">
                    <Button disabled={activeRoom!==2} className={activeRoom>2?'map-button button2 finished':'map-button button2'} callback={()=>{callback('room2')}} value='2' name='Level 2' />
                </animated.div>
                <animated.div style={activeRoom===1?styles:{}} className="row">
                    <Button disabled={activeRoom!==1} className={activeRoom>1?'map-button button1 finished':'map-button button1'} callback={()=>{callback('room1')}} value='1' name='Level 1'  />
                </animated.div>
            </div>
        </div>
    )
}
export default MapPage