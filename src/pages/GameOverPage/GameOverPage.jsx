import React  from "react";
import './GameOverPage.css'
import {useParams} from "react-router-dom";


const GameOverPage = ()=> {
    const {outcome} = useParams()
    return(
        <div className='game-over' >
            <h1>GAME OVER </h1>
            <h2>You {outcome}</h2>
        </div>
    )
}
export default GameOverPage