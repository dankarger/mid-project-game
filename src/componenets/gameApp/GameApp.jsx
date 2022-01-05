import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CreatePlayerPage from "../../pages/CreatePlayerPage/CreatePlayerPage";
import './GameApp.css'
import GameLogic from "../GameLogic/GameLogic";
import {Character, PlayerClass} from "../../Data/Data";
import GameOverPage from "../../pages/GameOverPage/GameOverPage";
import TutorialPage from "../../pages/Tutorial/TutorialPage";

export const PlayerContext = React.createContext();
export const SettingContext = React.createContext();

const GameApp=()=>{
       const[currentPlayer,setCurrentPlayer]=useState( new PlayerClass(Character['chickenRider']))
       const[isSettingPage,setIsSettingPage]=useState(false)
       function createNewPlayer({newPlayer}){
        setCurrentPlayer(newPlayer)
    }

    const showSettingsPage = ()=>{
           setIsSettingPage(!isSettingPage)
    }

    return (
        <div className='GameApp'>
            <SettingContext.Provider value={showSettingsPage}>
            <PlayerContext.Provider value={currentPlayer}>
                <BrowserRouter >
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/create' element={<CreatePlayerPage createNewPlayer={()=>createNewPlayer()} />} />
                        <Route path='/game'  element={<GameLogic />} />
                        <Route path='/game-over/:outcome'  element={<GameOverPage />} />
                        <Route path='/tutorial'  element={<TutorialPage />} />
                    </Routes>
                </BrowserRouter>
                {/*<div className={isSettingPage?'show':'hide'}>*/}
                {/*    hhhhhhhhhhhh*/}
                {/*    <SettingsPage />*/}
                {/*</div>*/}
            </PlayerContext.Provider>
            </SettingContext.Provider>
        </div>
    )
}
export default GameApp