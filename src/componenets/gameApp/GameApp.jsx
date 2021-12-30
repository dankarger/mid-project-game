import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import HomePage from "../../pages/HomePage/HomePage";
import CreatePlayerPage from "../../pages/CreatePlayerPage/CreatePlayerPage";
import './GameApp.css'
import GameLogic from "../GameLogic/GameLogic";
import {Character} from "../../Data/Data";

export const PlayerContext = React.createContext();

const GameApp=()=>{
    const[player,setPlayer]=useState(Character['chickenRider'])



    useEffect(()=>{
        setPlayer(Character['chickenRider'])
    },[])

    return (
        <div className='GameApp'>
            <PlayerContext.Provider value={player}>
                <BrowserRouter >
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/create' element={CreatePlayerPage} />
                        <Route path='/game'  element={<GameLogic player={player}/>} />
                        <Route path='/settings'  element={<SettingsPage />} />
                        {/*<Route path='/room'  element={<Room />} />*/}
                    </Routes>
                </BrowserRouter>
            </PlayerContext.Provider>
        </div>
    )
}
export default GameApp