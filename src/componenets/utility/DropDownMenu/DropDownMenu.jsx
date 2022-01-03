import React, { useEffect, useState } from "react";
import './DropDownMenu.css'
import {Link} from "react-router-dom";
import {useSpring,animated} from "react-spring";

const DropDownMenu = ({ list, callback, isOpenAnimation })=>{
    const[isAnimation,setIAnimation]=useState(true)
    const fade = useSpring({
        from:{scale:0,opacity:0},
        to:{scale:1,opacity:1}
    })

    useEffect(()=>{
        setIAnimation(isOpenAnimation)
    },[list,isOpenAnimation])

    const showList=()=>{
       return list.map(player=>{
           return (
                <div className={isAnimation?'show':'hide'}>
                   <div onClick={()=>callback(player)} className='drop-down-player' key={player.id + Date.now()}>
                       <Link to='/game'>
                           <div className='drop-down-item'>
                               <img className='thumbnail' src={player.avatar} alt="thumbnail"/>
                               <p> {player.name} </p>
                               <p>{player.score}</p>
                           </div>
                       </Link>
                   </div>
                </div>
           )
       })
    }

    return(
        (
            <animated.div style={fade} className='drop-down-menu' draggable={true} >
                <p>Characters:</p>
                { showList() }
            </animated.div>
        )
    )
}

export default DropDownMenu