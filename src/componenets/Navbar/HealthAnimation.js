import React, {useEffect, useState} from "react";
import {useSpring, animated, config} from "react-spring";

export default function HealthAnimation({num}) {
    console.log('nun',num)
    // const [flip, set] = useState(false)
    // const[currentNumber,setCurrenNumber]=useState(Number)
    const [oldNumber,setOldNumber] = useState(Number)
    const { number } = useSpring({
        // reset: true,
        // reverse: flip,
        from: { number: oldNumber },
        to:{number:num},
        number: 100,
        delay: 600,
        config: config.slow,
        onRest: () =>  setOldNumber(num),
    })

    // useEffect(()=>{
    //     setCurrenNumber(num)
    //     return ()=>{
    //         setOldNumber(num)
    //     }
    // },[num,oldNumber,currentNumber])

    return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
    // return <animated.div>{number.to(n=>n)}</animated.div>
}