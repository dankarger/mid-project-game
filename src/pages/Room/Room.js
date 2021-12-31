import React, {useCallback, useContext, useReducer, useState} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";
import {GameDataContext} from "../../componenets/GameLogic/GameLogic";
import {PlayerContext} from "../../componenets/gameApp/GameApp";
import Message from "../../componenets/Message/Message";

export const isMessageOnContext = React.createContext(null);
export const MessageContentContext = React.createContext(null);
export const IsMessageDispatch = React.createContext(null)


const showMessageReducer=(state, action)=>{
    console.log('hhhhh')
    return {isOn:!state.isOn }
}


const Room=({player,callbackGoBack})=>{
         const currentRoomData = useContext(GameDataContext)
         const currentPlayer = useContext(PlayerContext)
         // const[isMessageOn,setIsMessageOn]=useState(true)
         const[MessageContent,setIsMessageContent]=useState([])
          const [isMessageOn, dispatch] = useReducer(showMessageReducer, {isOn:true,messgae:'testtext'})




    return(
        <>
            <isMessageOnContext.Provider value={isMessageOn}>
                <div className='Room' style={{background:`${currentRoomData.image}`}}>
                    <Navbar currentPlayer={currentPlayer} roomNumber={currentRoomData.value}/>
                    <button onClick={showMessageReducer}>test</button>
                    <div className="Room-img-div">
                        <img className='Room-img' src={currentRoomData.image} alt="room-img"/>
                    </div>
                    <button onClick={callbackGoBack}>go back </button>
                    <div className="player--div">
                        <Player player={player} name='chicken-rider'  />
                    </div>
                    <div className="filler-div">
                    </div>
                    <div className="enemy-div">
                        <Enemy   enemy={currentRoomData.enemy} />
                    </div>
                    <ActionMenu />
                    <IsMessageDispatch.Provider value={isMessageOn}>
                      <Message message={['test',1000]} />
                    </IsMessageDispatch.Provider>
                </div>
            </isMessageOnContext.Provider>
        </>
    )
}
export default Room