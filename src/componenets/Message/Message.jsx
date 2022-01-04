import React from "react";
import './Message.css'
// import {isMessageOnContext,MessageContentContext} from "../../pages/Room/Room";
import {useSpring,animated,config} from "react-spring";


const Message = ({message,className})=> {

   const animateMessage= useSpring({
   //  const animateMessage= useTransition(message,{
       from: {y:100,
           opacity:1,
           scale:0.8},
       to: {
           y:-150,
           x:-150,
           opacity:0,
           scale:1.1
       },
       delay:200,
       reset:true,
       config:{config:config.slow,friction:10,duration:2000},
       cancel:false
   })
    // useEffect(()=>{
    //     if(messages.length>1){
    //         setMessages(...messages,message)
    //     }
    //     return ()=>{
    //         setMessages([])
    //     }
    // },[message,messages])

    return(
                <animated.div style={animateMessage} className='messageText'>
                    {message}
                </animated.div>
    )
}
export default Message