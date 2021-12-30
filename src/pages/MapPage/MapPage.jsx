import React from "react";
import './MapPage.css'
import Button from "../../componenets/utility/Button/Button";


const MapPage =({callback,currentRoom})=> {


    return (
        <div className='map'>
        <h2>Current room:{currentRoom.value}</h2>
            <div className="rooms-div">
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(4)}} value='5' name='Boss' />
                </div>
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(4)}} value='3' name='Room 4' />
                    <Button className='map-button' callback={()=>{callback(4)}} value='3' name='Room 4 '/>
                </div>
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(3)}} value='2' name='Room 3' />
                    <Button className='map-button' callback={()=>{callback(3)}} value='2' name='Room 3' />
                    <Button className='map-button' callback={()=>{callback(3)}} value='2' name='Room 3' />
                </div>
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(2)}} value='2' name='Room 2' />
                    <Button className='map-button' callback={()=>{callback(2)}} value='2' name='Room 2' />
                </div>
                <div className="row">
                    <Button className='map-button' callback={()=>{callback(1)}} value='2' name='Room1'  />
                </div>
            </div>
        </div>
    )
}
export default MapPage