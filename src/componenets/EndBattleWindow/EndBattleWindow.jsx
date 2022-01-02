import React from "react";
import './EndBattleWindow.css'
import Button from "../utility/Button/Button";


const EndBattleWindow= ({isWin,continueCallback})=> {



    return (
        <div className='end-battle'>
            end battle
            <h1>{isWin?'You Win':'You Lose'}</h1>

            <Button className='endBattle-window' callback={continueCallback} name={"Continue"}/>
        </div>
    )
}
export default EndBattleWindow