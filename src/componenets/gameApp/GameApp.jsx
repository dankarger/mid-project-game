import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import HomePage from "../../pages/HomePage/HomePage";
import CreatePlayerPage from "../../pages/CreatePlayerPage/CreatePlayerPage";
import './GameApp.css'
import GameLogic from "../GameLogic/GameLogic";
import {Character, PlayerClass} from "../../Data/Data";
import GameOverPage from "../../pages/GameOverPage/GameOverPage";
export const PlayerContext = React.createContext();

const GameApp=()=>{
       const[currentPlayer,setCurrentPlayer]=useState( new PlayerClass(Character['chickenRider']))

      function createNewPlayer({newPlayer}){
        setCurrentPlayer(newPlayer)
    }

    return (
        <div className='GameApp'>
            <PlayerContext.Provider value={currentPlayer}>
                <BrowserRouter >
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/create' element={<CreatePlayerPage createNewPlayer={()=>createNewPlayer()} />} />
                        <Route path='/game'  element={<GameLogic />} />
                        <Route path='/game-over/:outcome'  element={<GameOverPage />} />
                        <Route path='/settings'  element={<SettingsPage />} />
                    </Routes>
                </BrowserRouter>
            </PlayerContext.Provider>
        </div>
    )
}
export default GameApp