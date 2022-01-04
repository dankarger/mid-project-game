import React, {useContext, useEffect, useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'
import {Character, PlayerClass, RoomsData} from "../../Data/Data";
import {PlayerContext} from "../gameApp/GameApp";
import {SoundsList} from "../../Data/Data";
import PlaySound from "../SoundPlayer/PlaySound";
import PlayMusic from "../SoundPlayer/PlayMusic";

//use Contex states
export const GameDataContext = React.createContext();
export const EnemyContext = React.createContext();
export const SettingsPageContext = React.createContext()

export const getPlayerFromLocalStorage =  ()=>{
    const localPlayer =  localStorage.getItem('chicken') ;
    if(localPlayer){
        return JSON.parse(localPlayer)
    }
    return new PlayerClass(Character['chickenRider'])
}

const GameLogic = ()=> {
    const player = useContext(PlayerContext);
    const[isMap,setIsMap]=useState(true);
    const[currentRoomData,setCurrentRoomData]=useState(RoomsData['room0']);
    const[currentPlayer,setCurrentPlayer]=useState(player);
    const[currentEnemy,setCurrentEnemy]=useState({});
    const[isPlayMusic,setIsPlayMusic] = useState(false)
    const[isSettingPage,setIsSettingPage]=useState(false)

    // const[volumeController,setVolumeController]=useState(1)
    const handleMapButton=(room)=>{
        if(currentRoomData[room]==='boss')console.log('boss')
        setCurrentRoomData(RoomsData[room]);
        setCurrentEnemy(currentRoomData.enemy);
        setIsMap(!setIsMap);
        PlaySound(SoundsList['click5'],0.2)
        setIsPlayMusic(true)
    }

    useEffect(()=>{
        setCurrentPlayer(()=>getPlayerFromLocalStorage())
    },[currentRoomData,player,currentEnemy])

    const handleGoBackButton = ()=>{
        setIsMap(true)
    }


    return (
        <div>
            <GameDataContext.Provider value={currentRoomData}>
                <SettingsPageContext.Provider value={{isSettings:isSettingPage, setIsSettings:setIsSettingPage,isPlayMusic:isPlayMusic}} >
                   <EnemyContext.Provider value={currentEnemy}>
                    <div className={ isMap ? 'show' : 'hide' }>
                        <MapPage currentRoom={currentRoomData} callback={handleMapButton} />
                    </div>
                    <div className={ !isMap ? 'show' : 'hide' }>
                        <Room callbackGoBack={handleGoBackButton} player={currentPlayer} roomData={currentRoomData}/>
                    </div>
                       <div className={isSettingPage?'show':'hide'}>
                           <PlayMusic isPlay={isPlayMusic} volume={0.5} />
                       </div>
                   </EnemyContext.Provider>
                </SettingsPageContext.Provider>
        </GameDataContext.Provider>
        </div>
    )
}
export default GameLogic