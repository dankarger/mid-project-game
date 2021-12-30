import React, {useEffect, useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'
import { RoomsData} from "../../Data/Data";


export const GameDataContext = React.createContext();
export const PlayerContext = React.createContext();
export const EnemyContext = React.createContext();



const GameLogic = ({player})=> {
    const[isMap,setIsMap]=useState(true);
    const[currentRoomData,setCurrentRoomData]=useState(RoomsData['room1'])
    const[currentPlayer,setCurrentPlayer]=useState(player)
    const[currentEnemy,setCurrentEnemy]=useState({})
    const handleMapButton=(room)=>{
        console.log('r',room)
        setCurrentRoomData(RoomsData[room]);
        setCurrentEnemy(currentRoomData.enemy)
        setIsMap(!setIsMap);

    }

    useEffect(()=>{
        setCurrentPlayer(player)

    },[currentRoomData,player,currentEnemy])

    return (
        <div>
            <GameDataContext.Provider value={currentRoomData}>
                <PlayerContext.Provider value={currentPlayer}>
                   <EnemyContext.Provider value={currentEnemy}>
                    <div className={ isMap ? 'show' : 'hide' }>
                        <MapPage currentRoom={currentRoomData} callback={handleMapButton} />
                    </div>
                    <div className={ !isMap ? 'show' : 'hide' }>
                        <Room  player={currentPlayer} roomData={currentRoomData}/>
                    </div>
                   </EnemyContext.Provider>
                </PlayerContext.Provider>
        </GameDataContext.Provider>
        </div>
    )
}
export default GameLogic