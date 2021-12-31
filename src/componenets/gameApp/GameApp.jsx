import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import HomePage from "../../pages/HomePage/HomePage";
import CreatePlayerPage from "../../pages/CreatePlayerPage/CreatePlayerPage";
import './GameApp.css'
import GameLogic from "../GameLogic/GameLogic";
import {Character, EnemyClass, PlayerClass} from "../../Data/Data";

export const PlayerContext = React.createContext();

const GameApp=()=>{
    // const[player,setPlayer]=useState(Character['chickenRider'])
       const[currentPlayer,setCurrentPlayer]=useState( new PlayerClass(Character['chickenRider']))


     useEffect(()=>{
         const createNewPlayer=()=>{
             const newPlayer = new PlayerClass(Character['chickenRider'])
             setCurrentPlayer(newPlayer)
             console.log('player',newPlayer)
         }
         createNewPlayer()

     },[Character.chickenRider])

    return (
        <div className='GameApp'>
            <PlayerContext.Provider value={currentPlayer}>
                <BrowserRouter >
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/create' element={CreatePlayerPage} />
                        <Route path='/game'  element={<GameLogic player={currentPlayer}/>} />
                        <Route path='/settings'  element={<SettingsPage />} />
                        {/*<Route path='/room'  element={<Room />} />*/}
                    </Routes>
                </BrowserRouter>
            </PlayerContext.Provider>
        </div>
    )
}
export default GameApp