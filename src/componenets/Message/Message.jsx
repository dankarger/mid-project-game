import React from "react";
import './Message.css'
// import {isMessageOnContext,MessageContentContext} from "../../pages/Room/Room";


const Message = ({message,className})=> {
   // const isMessageOn = useContext(isMessageOnContext);
   // const  messageContent  = useContext(MessageContentContext)

    // const showMessage=()=>{
    //    setTimeout(()=>{
    //         console.log('messgae21212')
    //    },time)
    // }
    // useState(()=>{
    //    if(isMessageOn)showMessage()
    // },[isMessageOn])


    return(
                <div className='messageText'>
                    {/*<div><span>❖ </span></div>*/}
                    {message}
                    {/*<div><span>❖</span></div>*/}
                </div>
    )
}
export default Message