import React  from "react";
import './GameOverPage.css'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Button from "../../componenets/utility/Button/Button";

const GameOverPage = ()=> {
    const {outcome} = useParams()
    return(
        <div className='game-over' >
            <h1>GAME OVER </h1>
            <h2>You {outcome}</h2>

            <Link to='/' >
                <Button name='Start Over' />
            </Link>
            <Link to='/' >
                <Button name='Settings' />
            </Link>
        </div>
    )
}
export default GameOverPage