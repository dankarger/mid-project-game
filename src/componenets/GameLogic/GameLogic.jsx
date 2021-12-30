import React, {useEffect, useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'
import { RoomsData} from "../../Data/Data";


export const GameDataContex = React.createContext();



const GameLogic = ({player})=> {
    const[isMap,setIsMap]=useState(true);
    const[currentRoomData,setCurrentRoomData]=useState(RoomsData['room1'])
    const[currentPlayer,setCurrentPlayer]=useState(player)
    const handleMapButton=(room)=>{
        console.log('r',room)
        setCurrentRoomData(RoomsData[room]);
        setIsMap(!setIsMap);

    }

    useEffect(()=>{
        setCurrentPlayer(player)
    },[currentRoomData,player])

    return (
        <div>
            <GameDataContex.Provider value={currentRoomData}>
            <div className={ isMap ? 'show' : 'hide' }>
                <MapPage currentRoom={currentRoomData} callback={handleMapButton} />
            </div>
            <div className={ !isMap ? 'show' : 'hide' }>
                <Room  player={currentPlayer} roomData={currentRoomData}/>
            </div>
        </GameDataContex.Provider>
        </div>
    )
}
export default GameLogic