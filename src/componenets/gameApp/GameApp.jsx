import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "../../pages/HomePage";


const GameApp=()=>{

    return (
        <div className='GameApp'>
            <BrowserRouter >

                <Routes>
                    <Route path='/' exact element={<HomePage />} />
                    {/*<Route path='/cards' exact element={<ShowCardPage />} />*/}
                    {/*<Route path='/manage' exact element={<ManageCardsPage />} />*/}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default GameApp