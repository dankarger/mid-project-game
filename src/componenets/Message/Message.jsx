import React, {useContext, useReducer, useState} from "react";
import './Message.css'
import {isMessageOnContext,MessageContentContext} from "../../pages/Room/Room";


const Message = ({message,time})=> {
   const isMessageOn = useContext(isMessageOnContext);

   const  messageContent  = useContext(MessageContentContext)

    const showMessage=()=>{
       setTimeout(()=>{
            console.log('messgae21212')
       },time)
    }
    useState(()=>{
       if(isMessageOn)showMessage()
    },[isMessageOn])


    return(
        <div  className={isMessageOn? 'message-div show': 'hide'}>
                <div className='messageText'>{message}</div>
        </div>

    )
}
export default Message