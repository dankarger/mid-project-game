import React, {useEffect, useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'
import {EnemyData, RoomsData} from "../../Data/Data";

const GameLogic = ({player})=> {
    const[isMap,setIsMap]=useState(true);
    const[currentRoomData,setCurrentRoomData]=useState({})
    const[currentPlayer,setCurrentPlayer] = useState(player)
    const[currentEnemy,setCurrentEnemy] = useState( currentRoomData.enemy)
    // const[roomNumber, setRoomNumber] = useState()
    // const[enemy,setEnemy] = useState()

    // const currentEnemyVariable = currentRoomData.enemy

   const handleMapButton=(room)=>{
    setCurrentRoomData(RoomsData[room]);
    setCurrentEnemy(RoomsData[room].enemy)
    setIsMap(!setIsMap);
    console.log('ene,',currentEnemy)
    }
    useEffect(()=>{
        // setCurrentRoomData(RoomsData['room1'])
    },[])

    useEffect(()=>{

        // setCurrentRoomData(RoomsData['room1'])
        setCurrentPlayer(player)
        setCurrentEnemy(currentRoomData.enemy)

    },[currentRoomData,currentPlayer,currentPlayer,player])

    return (
        <div>
            <div className={ isMap ? 'show' : 'hide' }>
                <MapPage currentRoom={currentRoomData} callback={handleMapButton} />
            </div>
            <div className={ !isMap ? 'show' : 'hide' }>
                <Room enemy={currentEnemy} player={currentPlayer} roomData={currentRoomData}/>
            </div>

        </div>
    )
}
export default GameLogic