import React from "react";
import './EndBattleWindow.css'
import Button from "../utility/Button/Button";
import {Link} from "react-router-dom";

const EndBattleWindow= ({isWin,continueCallback,isGameOver})=> {



    return (
        <div className='end-battle'>
            end battle
            <h1>{isWin?'You Win':'You Lose'}</h1>
            {isGameOver?
                <Link to='/game-over/win'>
                    <Button className='endBattle-window'  name={"Continue"}/>

                </Link>
                :                <Button className='endBattle-window' callback={continueCallback} name={"Continue"}/>

            }



        </div>
    )
}
export default EndBattleWindow