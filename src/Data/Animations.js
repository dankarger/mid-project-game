import { useSpring, animated ,config,useTransition} from 'react-spring'
import {useState,useEffect} from "react";
export function FadeAnimation({object}) {
    const props = useSpring({ to: { opacity: 1,x:20 }, from: { opacity: 0 ,x:-300} })
    return <animated.div style={props}>{object}dsdsdsdsd    </animated.div>
}


export const EntranceAnimation=({element,stateProps})=> {
    const [state, setState] = useState(Boolean);

    const styles = useSpring({
        // loop: { reverse: true },
        from: { x: stateProps ?-1110: -50},
        // from: { x:-1000},
        to: { x: -50 },
         reset:stateProps,
        // reset:!!stateProps,
        // reset:stateProps,
        config:config.molasses
    })

    // useEffect(()=>{
    //     if(stateProps===true)setState(!state)
    //     return ()=> {
    //         setState(!state)
    //         setState(stateProps)
    //     }
    // },[state,stateProps])



    return(
        <animated.div style={styles}>
            {element}
        </animated.div>
    )
}





export default function Boing({character,stateProps,health}) {
    const [state, toggle] = useState(false)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    })

    // const toggleState = () =>{
    //     toggle(!state)
    // }
    useEffect(()=>{
        if(stateProps!==state)toggle(!state)
        return ()=>{
            toggle(!state)
        }
    },[stateProps,state])

    return (
        <div >
            {/*<button onClick={toggleState}>  click</button>*/}
            <animated.div
                // className={styles.text}
                style={{
                    // opacity: x.to({ range: [0, 0], output: [0.3, 1] }),
                    scale: x.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                    }),

                }}>
                {/*<img src='/assets/images/deardear.png' alt=""/>*/}
                {character}
            </animated.div>
        </div>
    )
}



export const Almost = ({element})=>{

    const[isToggle,setIsToggle]=useState(false);
    // const baseColor = isToggle?'red':'blue'
    const fade = useSpring({
        opacity:isToggle?1:0,
        x:isToggle?300: 0,
        color:'red'

    })
    const color = useSpring({
        color:'blue'
    })
    const[whatAnimation,setWhatAnimation]=useState(true)
    const handleChangeAnimation=()=>{
        // if(whatAnimation!==fade){
        setWhatAnimation(!whatAnimation)
        // }else{
        //     setWhatAnimation(fade)
        // }
    }


    return(
        <div>
            <button onClick={()=>handleChangeAnimation()} >change</button>
            <button  onClick={()=>setIsToggle(!isToggle)}>toggle</button>
            <animated.div style={whatAnimation?color:fade} className="div">

                {element}
            </animated.div>
        </div>
    )
}


export function LoopObject({element}) {
    const styles = useSpring({
        // loop: { reverse: true },
        from: { x: -300 },
        to: { x: 100 },
    })

    return (

        <animated.div style={{styles}}>
            {element}
        </animated.div>

    )
}


export const Mount =()=>{
    // const [isVisible,setIsVisible] = useState(false);
    const[items, setItems]=useState([])
    const transition= useTransition(items,{
        from:{ x:-100,y:800,opacity:0},
        enter:{x:0,y:0,opacity:1},
        leave:{x:-300},
    });
    return(
        <div>
            <div className="app">
                <button onClick={()=>{
                    setItems(v => v.length? []: [{},{},{}] );
                }}> {items.length ? 'un-mount':'mount'}</button>
                <div className="container">
                    {transition((style,item)=>
                        item ? <animated.div style={style} className={'item'}/>:''
                    )}
                </div>
            </div>
        </div>
    )
}
