import React, {useEffect, useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'

const GameLogic = ()=> {
   const[isMap,setIsMap]=useState(true);
    const[roomNumber,setRoomNumber]=useState(1)


   const handleMapButton=(room)=>{
        console.log(room)
        setRoomNumber(room);
        setIsMap(!setIsMap);
    }
    useEffect(()=>{
        console.log('efx')
    },[roomNumber])

    return (
        <div>
            <div className={ isMap ? 'show' : 'hide' }>
                <MapPage currentRoom={roomNumber} callback={handleMapButton} />
            </div>
            <div className={ !isMap ? 'show' : 'hide' }>
                <Room room={roomNumber}/>
            </div>

        </div>
    )
}
export default GameLogic