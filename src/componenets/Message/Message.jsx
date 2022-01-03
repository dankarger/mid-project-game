import React from "react";
import './Message.css'
// import {isMessageOnContext,MessageContentContext} from "../../pages/Room/Room";
import {useSpring,animated,config} from "react-spring";


const Message = ({message,className})=> {
    // const[messages,setMessages]=useState([message])
//     const [springs, api] = useSprings(['test','tstst'], index => ({ opacity: 1 }))
//
// // Update springs with new props
//     api.start(index => ({ opacity: 0 }))
// // Stop all springs
//     api.stop()
   const animateMessage= useSpring({
   //  const animateMessage= useTransition(message,{
       from: {y:400,
           opacity:0,
           scale:0.8},

       to: {
           y:-150,
           x:-150,
           opacity:1,
           scale:1.1
       },
       delay:400,

       reset:true,
       config:config.molasses,
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
                    {/*<div><span>❖ </span></div>*/}
                    {message}
                    {/*<div><span>❖</span></div>*/}
                </animated.div>
    )
}
export default Message