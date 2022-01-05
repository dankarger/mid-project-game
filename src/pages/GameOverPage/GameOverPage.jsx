import React, {useEffect} from "react";
import './GameOverPage.css'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Button from "../../componenets/utility/Button/Button";
import PlaySound from "../../componenets/SoundPlayer/PlaySound";
import {SoundsList} from "../../Data/Data";


const GameOverPage = ()=> {
    const {outcome} = useParams();
    useEffect(()=>{
        if(outcome==='win'){
            PlaySound(SoundsList['win'],0.2)
        }
        else{
            PlaySound(SoundsList['lose'],0.2)
        }
    },[outcome])


    return(
        <div className='game-over' >
            <h1>GAME OVER </h1>
            <h2>You {outcome}</h2>
            <div>
                <Link to='/' >
                    <Button className='game-overButton' name='Start Over' />
                </Link>
                <Link to='/' >
                    <Button className='game-overButton' name='Settings' />
                </Link>
            </div>

        </div>
    )
}
export default GameOverPage