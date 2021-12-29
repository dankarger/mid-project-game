import React  from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import HomePage from "../../pages/HomePage";


const GameApp=()=>{

    return (
        <div className='GameApp'>
            <BrowserRouter >

                <Routes>
                    <Route path='/' exact element={<HomePage />} />
                    <Route path='/settings' exact element={<SettingsPage />} />
                    {/*<Route path='/manage' exact element={<ManageCardsPage />} />*/}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default GameApp