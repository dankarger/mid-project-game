import React, {useContext, useEffect, useReducer, useState} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";
import {GameDataContext} from "../../componenets/GameLogic/GameLogic";
import {PlayerContext} from "../../componenets/gameApp/GameApp";
import Message from "../../componenets/Message/Message";
import {EnemyClass} from "../../Data/Data";

// export const isMessageOnContext = React.createContext(null);
// export const MessageContentContext = React.createContext(null);
// export const IsMessageDispatch = React.createContext(null)

//
// const reducer=(state, action)=>{
//     console.log('hhhhh')
//     return {isOn:false}
// }


const Room=({player,callbackGoBack})=>{
         const currentRoomData = useContext(GameDataContext)
         const currentPlayer = useContext(PlayerContext)
         const[isMessageOn,setIsMessageOn]=useState(false)
         const[messageContent,setIsMessageContent]=useState('')
          // const [isMessageOn, dispatch] = useReducer(reducer, {isOn:true,messgae:'testtext'})

        const showMessage=(message,time)=> {
             setIsMessageContent(message)
             setIsMessageOn(true);
             setTimeout(()=>{
                 setIsMessageContent('')
                 setIsMessageOn(false);
             },time)
        }

        useEffect(()=>{
            showMessage('Your Turn',3700)
        },[])


        const handleAttack1 =() => {
             showMessage('atttack1',800)


        }


    return(
        <>
            {/*<isMessageOnContext.Provider value={isMessageOn}>*/}
                <div className='Room' style={{background:`${currentRoomData.image}`}}>
                    <Navbar currentPlayer={currentPlayer} roomNumber={currentRoomData.value}/>
                    <div className="Room-img-div">
                        <img className='Room-img' src={currentRoomData.image} alt="room-img"/>
                    </div>
                    {/*<button onClick={()=> showMessage('teeeest',1000)}>go back </button>*/}
                    {/*<button onClick={callbackGoBack}>go back </button>*/}
                    <div className="player--div">
                        <Player player={player} name='chicken-rider'  />
                    </div>
                    <div className="filler-div">
                    </div>
                    <div className="enemy-div">
                        <Enemy   enemy={currentRoomData.enemy} />
                    </div>
                    <ActionMenu handleAttack1={handleAttack1}/>
                    {/*<IsMessageContext.Provider value={isMessageOn}>*/}
                    <div className={isMessageOn?'message-div showMessage':' message-div hideMessage'}>
                      <Message  message={messageContent} />
                    </div>
                    {/*</IsMessageContext.Provider>*/}
                </div>
            {/*</isMessageOnContext.Provider>*/}
        </>
    )
}
export default Room