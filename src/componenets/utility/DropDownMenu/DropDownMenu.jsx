import React from "react";
import './DropDownMenu.css'
import {Link} from "react-router-dom";


const DropDownMenu = ({ list, callback })=>{
    const showList=()=>{
       return list.map(player=>{
           return (

               <div onClick={()=>callback(player)} className='drop-down-player' key={player.id + Date.now()}>
                   <Link to='/game'>
                   <p> {player.name} </p>
                    <p>{player.score}</p>
                   </Link>
               </div>

           )
       })
    }



    return(
        <div className='drop-down-menu'>
            {showList()}
        </div>
    )
}

export default DropDownMenu