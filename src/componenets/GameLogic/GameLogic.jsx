import React, {useEffect, useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'
import { RoomsData} from "../../Data/Data";


export const GameDataContex = React.createContext();



const GameLogic = ({player})=> {
    const[isMap,setIsMap]=useState(true);
    const[currentRoomData,setCurrentRoomData]=useState(RoomsData['room1'])
    // const[currentPlayer,setCurrentPlayer] = useState(player)
    // const[currentEnemy,setCurrentEnemy] = useState( currentRoomData.enemy)
    // const[roomNumber, setRoomNumber] = useState()
    // const[enemy,setEnemy] = useState()

    // const currentEnemyVariable = currentRoomData.enemy

   const handleMapButton=(room)=>{
        console.log('r',room)
    setCurrentRoomData(RoomsData[room]);
    // setCurrentEnemy(RoomsData[room].enemy)
    setIsMap(!setIsMap);
       // console.log('ene22,',currentEnemy)
       console.log('current',currentRoomData)
    }
    // useEffect(()=>{
    //     // setCurrentRoomData(RoomsData['room1'])
    //     setCurrentPlayer(player)
    // },[])

    // console.log('ene,',currentEnemy)
    console.log('current22',currentRoomData)
    useEffect(()=>{

        // setCurrentRoomData(RoomsData['room1'])
        // setCurrentPlayer(player)
        // setCurrentEnemy(currentRoomData.enemy)
        // console.log('ene3,',currentEnemy)
        console.log('current223',currentRoomData)
    },[currentRoomData,player])

    return (
        <div>
            <GameDataContex.Provider value={currentRoomData}>
            <div className={ isMap ? 'show' : 'hide' }>
                <MapPage currentRoom={currentRoomData} callback={handleMapButton} />
            </div>
            <div className={ !isMap ? 'show' : 'hide' }>
                <Room  player={player} roomData={currentRoomData}/>
            </div>
        </GameDataContex.Provider>

        </div>
    )
}
export default GameLogic