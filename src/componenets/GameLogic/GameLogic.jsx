import React, {useEffect, useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'
import {EnemyData, RoomsData} from "../../Data/Data";

const GameLogic = ({player})=> {
   const[isMap,setIsMap]=useState(true);
    const[roomData,setRoomData]=useState(RoomsData['room1'])
    const[currentPlayer,setCurrentPlayer] = useState(player)
    const[enemy,setEnemy] = useState()

    const currentEnemy = EnemyData['deer']

   const handleMapButton=(room)=>{
        console.log(room)
       setRoomData(room);
        setIsMap(!setIsMap);
    }
    useEffect(()=>{
        console.log('efx')
        setRoomData(RoomsData['room1'])
        setCurrentPlayer(player)
        setEnemy(enemy)
        return ()=>{
            console.log('p-gamelogic',player)
        }
    },[roomData])

    return (
        <div>
            <div className={ isMap ? 'show' : 'hide' }>
                <MapPage currentRoom={roomData} callback={handleMapButton} />
            </div>
            <div className={ !isMap ? 'show' : 'hide' }>
                <Room enemy={currentEnemy} player={currentPlayer} roomData={roomData}/>
            </div>

        </div>
    )
}
export default GameLogic