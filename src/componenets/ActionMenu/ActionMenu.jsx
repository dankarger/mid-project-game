import React,{useEffect} from "react";
import './ActionMenu.css'
import Button from "../utility/Button/Button";
import {useSpring,animated} from "react-spring";


const ActionMenu =({handleAttack1,handleDeffend1,disabled}) => {
        const [styles, api] = useSpring(() => ({
            from: { x: -75, opacity: 1 },
        }))
    const [styles2, api2] = useSpring(() => ({
        from: { x: 75, opacity: 1 },
    }))
        useEffect(() => {
            api({
                x: 75,
                opacity: 1,
                config:{friction:10,duration:800},
                loop: { reverse: true },
                delay:Math.floor(Math.random()*2400),
            })
            api2({
                x: -75,
                opacity: 1,
                config:{friction:1,duration:1500},
                loop: { reverse: true },
                delay:Math.floor(Math.random()*1400),
            })
        }, [api,api2])

    return (
        <div className='action-menu'>
            <div className='action-buttons-div'>
                <div className="shader-div ">
                    <animated.div  style={styles2} >
                        <div className="attackButtonDiv">
                            <Button disabled={disabled}
                                    callback={handleAttack1}
                                    className='action'
                                    icon={<i className="fas fa-meteor"> </i>}
                                    name='Attack'/>
                        </div>
                    </animated.div>
                    <animated.div
                        style={styles}>
                        <div className="defendButtonDiv">
                            <Button disabled={disabled}
                                    callback={handleDeffend1}
                                    className='action defendButton'
                                    icon={<i className="fas fa-shield-alt"> </i>}
                                    name='Deffend'/>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}
export default ActionMenu