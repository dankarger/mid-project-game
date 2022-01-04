import React,{useEffect} from "react";
import './ActionMenu.css'
import Button from "../utility/Button/Button";
import {useSpring,animated} from "react-spring";


const ActionMenu =({handleAttack1,handleDeffend1,disabled}) => {
        const [styles, api] = useSpring(() => ({
            from: { x: -70, opacity: 1 },
        }))
    const [styles2, api2] = useSpring(() => ({
        from: { x: 70, opacity: 1, },
    }))
        useEffect(() => {
            api({
                x: 70,
                opacity: 1,
                config:{friction:10,duration:1000},
                loop: { reverse: true },
            })
            api2({
                x: -70,
                opacity: 1,
                config:{friction:10,duration:1500},
                loop: { reverse: true },
            })
        }, [api])

    return (
        <div className='action-menu'>
            <div className='action-buttons-div'>
                <div className="shader-div ">
                    <animated.div  style={styles2} >
                        <div className="attackButtonDiv">
                            <Button disabled={disabled}
                                    callback={handleAttack1}
                                    className='action'
                                    icon={<i className="fas fa-meteor"></i>}
                                    name='Attack'/>
                        </div>
                    </animated.div>

                    <animated.div
                        style={styles}>
                        <div className="defendButtonDiv">
                            <Button disabled={disabled}
                                    callback={handleDeffend1}
                                    className='action defendButton'
                                    icon={<i className="fas fa-shield-alt"></i>}
                                    name='Deffend'/>
                        </div>
                    </animated.div>

                     {/*<Button disabled={disabled} className='action' icon='p' name='Power'/>*/}
                     {/*<Button disabled={disabled} className='action' icon='i' name='Item' />*/}
                </div>
            </div>
        </div>
    )
}
export default ActionMenu