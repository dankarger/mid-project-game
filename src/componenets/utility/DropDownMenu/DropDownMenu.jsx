import React, { useEffect, useState } from "react";
import './DropDownMenu.css'
import {Link} from "react-router-dom";
import {useSpring, animated, config} from "react-spring";

const DropDownMenu = ({ list, callback, isOpenAnimation })=>{
    const[isAnimation,setIAnimation]=useState(true)
    const fade = useSpring({
        from:{x:-300,scale:0,opacity:0},
        to:{x:20, scale:1,opacity:1},
        config:{duration:500,config:config.slow}
    })

    useEffect(()=>{
        setIAnimation(isOpenAnimation)
    },[list,isOpenAnimation])

    const showList=()=>{
       return list.map(player=>{
           return (
                <div key={player.id} className={isAnimation?'show':'hide'}>
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
            <animated.div style={fade} className='drop-down-menu' >
              <div className='drop-heading'>
                  <p>Characters ({list.length})</p>       <p>Score:</p>
              </div>
                { showList() }
            </animated.div>
        )
    )
}

export default DropDownMenu