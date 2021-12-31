import React, {useContext, useEffect, useState} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";
import {GameDataContext} from "../../componenets/GameLogic/GameLogic";
import {PlayerContext} from "../../componenets/gameApp/GameApp";
import Message from "../../componenets/Message/Message";
import {EnemyClass} from "../../Data/Data";

// export const isMessageOnContext = React.createContext(null);
// export const MessageContentContext = React.createContext(null);
// export const IsMessageDispatch = React.createContext(null)

//
// const reducer=(state, action)=>{
//     console.log('hhhhh')
//     return {isOn:false}
// }


const Room=({player,callbackGoBack})=>{
         const currentRoomData = useContext(GameDataContext)
         const currentPlayer = useContext(PlayerContext)
         const [currentEnemy,setCurrentEnemy] = useState({})
         const[isMessageOn,setIsMessageOn]=useState(false)
         const[messageContent,setIsMessageContent]=useState('')
         const[isAction,setisAction]=useState(false)
         const showMessage=(message,time)=> {
             setIsMessageContent(message)
             setIsMessageOn(true);
             setTimeout(()=>{
                 setIsMessageContent('')
                 setIsMessageOn(false);
             },time)
        }

        useEffect(()=>{
            showMessage('Your Turn',3700)
            const createNewEnemy=()=>{
                const newEnemy = new EnemyClass(currentRoomData.enemy)
                setCurrentEnemy(newEnemy)
                console.log('enemy',newEnemy)
            }
            createNewEnemy()
        },[currentRoomData.enemy])

        const enemyDeath=()=>{
                 currentEnemy.currentImage=currentEnemy.images.death
                 showMessage('You win', 1500)
        }

        const attackRandomValue =()=>{
             return Math.floor(Math.random()*20)
        }
        const handleAttack1 =() => {
             // showMessage('atttack',800)
            const damage = attackRandomValue()
            if(currentEnemy.health > damage) {
                currentEnemy.currentImage=currentEnemy.images.hit
                setTimeout(()=>{currentEnemy.currentImage=currentEnemy.images.default},200)
                setisAction(!isAction)
                showMessage(`${currentEnemy.name} take  ${damage} damage`, 1500)
                randomEnemyAttack()
                return currentEnemy.health -=damage
            }else{
                currentEnemy.health = 0;
                showMessage('You win!!', 5500)
                return enemyDeath()
            }
        }
      const handleAttack2 =(attacker,deffender) => {
        // showMessage('atttack',800)
        const damage = attackRandomValue()
        if(deffender.health > damage) {
            deffender.currentImage=deffender.images.hit
            setTimeout(()=>{deffender.currentImage=deffender.images.default},200)
            setisAction(!isAction)
            showMessage(`${deffender.name} take  ${damage} damage`, 1500)
            randomEnemyAttack()
            return deffender.health -=damage
        }else{
            currentEnemy.health = 0;
            showMessage('You win!!', 5500)
            return enemyDeath()
        }
    }
        const randomEnemyAttack=()=>{
            const damage = attackRandomValue();

            return damage
        }

    return(
        <>
            {/*<isMessageOnContext.Provider value={isMessageOn}>*/}
                <div className='Room' style={{background:`${currentRoomData.image}`}}>
                    <Navbar currentPlayer={player} roomNumber={currentRoomData.value}/>
                    <div className="Room-img-div">
                        <img className='Room-img' src={currentRoomData.image} alt="room-img"/>
                    </div>
                    {/*<button onClick={()=> showMessage('teeeest',1000)}>go back </button>*/}
                    <button onClick={callbackGoBack}>go back </button>
                    <div className="player--div">
                        <Player player={player} name='chicken-rider'  />
                    </div>
                    <div className="filler-div">
                    </div>
                    <div className="enemy-div">
                        <Enemy   enemy={currentEnemy} />
                    </div>
                    <ActionMenu handleAttack1={()=>handleAttack2(currentPlayer,currentEnemy)} />
                    {/*<IsMessageContext.Provider value={isMessageOn}>*/}
                    <div className={isMessageOn?'message-div showMessage':' message-div hideMessage'}>
                      <Message  message={messageContent} />
                    </div>
                    {/*</IsMessageContext.Provider>*/}
                </div>
            {/*</isMessageOnContext.Provider>*/}
        </>
    )
}
export default Room