import React from "react";
import './DropDownMenu.css'
import {Link} from "react-router-dom";


const DropDownMenu = ({ list, callback })=>{
    const showList=()=>{
       return list.map(player=>{
           return (

               <div onClick={()=>callback(player)} className='drop-down-player' key={player.id + Date.now()}>
                   <Link to='/game'>
                       <div className='drop-down-item'>
                           <img className='thumbnail' src={player.avatar} alt="thumbnail"/>
                           <p> {player.name} </p>
                           <p>{player.score}</p>

                       </div>

                   </Link>
               </div>

           )
       })
    }



    return(
        <div className='drop-down-menu' draggable={true}>
            {showList()}
        </div>
    )
}

export default DropDownMenu