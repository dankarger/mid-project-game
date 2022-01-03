import React, {useEffect,useState} from "react";
import './Message.css'
// import {isMessageOnContext,MessageContentContext} from "../../pages/Room/Room";
import {useTransition,animated,config} from "react-spring";




export default function Message2(it) {
    const [items, setItems] = useState(['tes233t','te3123123ee','te23123tetet',it])

    const transitions = useTransition(items, {
        from: { opacity: 0 ,y:1400},
        enter: { opacity: 1 ,y:1100},
        leave: { opacity: 0 ,y:-1100},
        delay: 200,
        config: config.molasses,
        onRest: () => setItems([]),
    })
    const addItem =(item)=>{
        //  let itemsList =items
        // itemsList.push(item)
        setItems([...prev=> prev, item])

    }
    useEffect(() => {
        // if (items.length === 0) {
        //     setTimeout(() => {
        //         setItems(['tes233t','te3123123ee','te23123tetet'])
        //     }, 4000)
        // } else{
            setItems([...prev=>prev, it])
        // }
    }, [items,it])

    return (
        <div style={{ display: 'flex' }}>

            {transitions(({ opacity }, item) => (
                <animated.div
                    style={{
                        // opacity: opacity.to(item.op),
                        transform: opacity
                            // .to(item.trans)
                            .to(y => `translate3d(0,${y}px,0)`),
                    }}>
                    {item.fig}
                    <h1>jjfhfhfhfhff</h1>
                </animated.div>
            ))}
        </div>
    )
}