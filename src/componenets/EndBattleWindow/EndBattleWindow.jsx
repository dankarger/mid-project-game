import React, {useEffect} from "react";
import './EndBattleWindow.css'
import Button from "../utility/Button/Button";
import {Link} from "react-router-dom";
import PlaySound from "../SoundPlayer/PlaySound";
import {SoundsList} from "../../Data/Data";

const EndBattleWindow= ({isWin,continueCallback,isGameOver})=> {
    const outcome = isWin? 'win' : 'lose';

    useEffect(()=>{
        if(isGameOver&&isWin){
            PlaySound(SoundsList['trumpet2'],0.1)
        }else if(isGameOver&&!isWin) {
            PlaySound(SoundsList['trumpet3'],0.1)
        }
    },[isWin,isGameOver])

    return (
        <div className='end-battle'>
           <h2>End of Battle</h2>
            <h1>{isWin?'You Win':'You Lose'}</h1>

            {isGameOver
                ? <Link to={`/game-over/${outcome}`}>
                    <Button className='endBattle-window'  name={"Continue"}/>
                   </Link>
                :  <Button className='endBattle-window' callback={continueCallback} name={"Continue"}/>
            }
        </div>
    )
}
export default EndBattleWindow