import React,{useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'

const GameLogic = ()=> {
   const[isMap,setIsMap]=useState(true);
    const[roomNumber,setRoomNumber]=useState(1)


   const handleMapButton=(room)=>{
        setRoomNumber(room);
        setIsMap(!setIsMap);
    }


    return (
        <div>
            <div className={ isMap ? 'show' : 'hide' }>
                <MapPage  callback={handleMapButton} />
            </div>
            <div>
                <Room room={roomNumber}/>
            </div>

        </div>
    )
}
export default GameLogic