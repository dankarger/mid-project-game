import React from "react";
import './Message.css'
import {useSpring,animated,config} from "react-spring";


const MessagePlayer = ({message,className})=> {

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
        config:{config:config.slow,friction:10,duration:2500},
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
        <animated.div style={animateMessage} className='messagePlayerText'>
            {message}
        </animated.div>
    )
}
export default MessagePlayer