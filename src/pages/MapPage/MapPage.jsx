import React, {useContext, useState} from "react";
import './MapPage.css'
import Button from "../../componenets/utility/Button/Button";
import {GameDataContext} from "../../componenets/GameLogic/GameLogic";


const MapPage =({callback})=> {
    const currentRoomData = useContext(GameDataContext);
    // const[activeRoom,setActiveRoom] = useState()

    return (
        <div className='map'>
        <h1>Current Level:{currentRoomData.value}</h1>
            <div className="rooms-div">
                <div className="row">
                    <Button className='map-button button5' callback={()=>{callback('boss')}} value='boss' name='Boss' />
                </div>
                <div className="row">
                    <Button className='map-button button4' callback={()=>{callback('room4')}} value='room4' name='Room-4' />
                    {/*<Button className='map-button hidden'  value='room4' name='Room-4 '/>*/}
                </div>
                <div className="row">
                    {/*<Button className='map-button hidden'  value='room3' name='Room-3' />*/}
                    <Button className='map-button button3' callback={()=>{callback('room3')}} value='room3' name='Room-3' />
                    {/*<Button className='map-button hidden'  value='room3' name='Room-3' />*/}
                </div>
                <div className="row">

                    <Button className='map-button button2' callback={()=>{callback('room2')}} value='room2' name='Room2' />
                </div>
                <div className="row">
                    <Button className='map-button button1' callback={()=>{callback('room1')}} value='room1' name='Room-1'  />
                </div>
            </div>
        </div>
    )
}
export default MapPage