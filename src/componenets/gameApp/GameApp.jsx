import React  from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import HomePage from "../../pages/HomePage";
import Room from "../../pages/Room/Room";
import './GameApp.css'
import GameLogic from "../GameLogic/GameLogic";

const GameApp=()=>{

    return (
        <div className='GameApp'>
            <BrowserRouter >

                <Routes>
                    <Route path='/' exact element={<HomePage />} />
                    <Route path='/game'  element={<GameLogic />} />
                    <Route path='/settings'  element={<SettingsPage />} />
                    <Route path='/room'  element={<Room />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default GameApp