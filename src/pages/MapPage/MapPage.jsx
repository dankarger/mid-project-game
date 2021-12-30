import React from "react";
import './MapPage.css'
import Button from "../../componenets/utility/Button/Button";


const MapPage =({callback,currentRoom})=> {


    return (
        <div className='map'>
        <h2>Current room:{currentRoom.value}</h2>
            <div className="rooms-div">
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(5)}} value='room5' name='Boss' />
                </div>
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(4)}} value='Room4' name='Room-4' />
                    <Button className='map-button' callback={()=>{callback(4)}} value='Room4' name='Room-4 '/>
                </div>
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(3)}} value='Room3' name='Room-3' />
                    <Button className='map-button' callback={()=>{callback(3)}} value='Room3' name='Room-3' />
                    <Button className='map-button' callback={()=>{callback(3)}} value='Room3' name='Room-3' />
                </div>
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(2)}} value='Room2' name='Room-2' />
                    <Button className='map-button' callback={()=>{callback(2)}} value='Room2' name='Room-2' />
                </div>
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(1)}} value='room1' name='Room-1'  />
                </div>
            </div>
        </div>
    )
}
export default MapPage