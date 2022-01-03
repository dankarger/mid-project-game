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
import EndBattleWindow from "../../componenets/EndBattleWindow/EndBattleWindow";
import Boing, {EntranceAnimation} from "../../Data/Animations";
// import {animated, useSpring,config} from "react-spring";


const Room=({player,callbackGoBack})=>{
         const currentRoomData = useContext(GameDataContext)
         const currentPlayer = useContext(PlayerContext)
         const [currentEnemy,setCurrentEnemy] = useState({})
         const[isMessageOn,setIsMessageOn]=useState(false)
         const[messageContent,setIsMessageContent]=useState('')
         const[isAction,setisAction]=useState(false);
         const[isBattleOver,setIsBattleOver]= useState(false);
         const[isWinBattle,setIsWinBattle]=useState(true);
         const[isGameOver,setIsGameOver]=useState(false)
         const[isEntranceAnimation,setIsEntranceAnimation]=useState(true)
         const[isHit,setIsHit]=useState(false)
        const[isStartBattle,setIsStartBattle]=useState(Boolean)

         const showMessage=(message, time)=> {
             setIsMessageContent(message)
             setIsMessageOn(true);
             setTimeout(()=>{
                 setIsMessageContent('')
                 setIsMessageOn(false);
             },time)
        }

        useEffect(()=>{
            showMessage(`Level ${currentRoomData.value===0?1:currentRoomData.value}`,6000)
            // setIsEntranceAnimation(true);
                setIsStartBattle(true)
            // showMessage('Your Turn',3700)
            const createNewEnemy=()=>{
                const newEnemy = new EnemyClass(currentRoomData.enemy);
                setCurrentEnemy(newEnemy);
            }
            createNewEnemy()
                setIsEntranceAnimation(false);
            return ()=>{
                setIsBattleOver(false);
                setIsEntranceAnimation(false);
            }
        }
        ,[currentRoomData.enemy,currentRoomData.value,isEntranceAnimation])

        const enemyDeath=()=>{
                 currentEnemy.currentImage=currentEnemy.images.death
                 setIsWinBattle(true);
                 setIsBattleOver(true);

                 if(currentEnemy.name==="BOSS"){
                     console.log('wwwinnn')
                     setIsGameOver(true)
                 }
        }

        const playerDeath=() =>{
            currentPlayer.currentImage=currentPlayer.images.death
            setIsWinBattle(false);
            setIsBattleOver(true);
        }

        const attackRandomValue =()=>{
             return Math.floor(Math.random()*20)
        }

        const handleAttack2 =(attacker,defender) => {
             // showMessage(`${attacker.name} Attack!!`,1500)
            setIsStartBattle(false)
        const damage = attackRandomValue()
        if(defender.health > damage) {
            defender.currentImage=defender.images.hit
            setTimeout(()=>{
                defender.currentImage=defender.images.default
                showMessage(`${defender.name} take  ${damage} damage`, 1500)
            },200)
            setisAction(!isAction)
            showMessage(`${defender.name} take  ${damage} damage`, 1500)
            if(attacker===currentPlayer){
                setIsHit(!isHit)
                randomEnemyAttack()
            }
            return defender.health -=damage
        }else{
            if(defender===currentEnemy){
                currentEnemy.health = 0;
                return enemyDeath()
            }
            if(defender===currentPlayer){
                currentPlayer.health = 0;
                return playerDeath()
            }

        }
    }

        const randomEnemyAttack=()=>{
           let randomize = Math.random()
            handleAttack2(currentEnemy,player)
            return randomize>0.3? handleAttack2(currentEnemy,player):''
        }

    return(
        <>
                <div className='Room' style={{background:`${currentRoomData.image}`}}>
                    <Navbar currentPlayer={player} currentEnemy={currentEnemy} roomNumber={currentRoomData.value}/>
                    <div className="Room-img-div">
                        <img className='Room-img' src={currentRoomData.image} alt="room-img"/>
                    </div>
                    <button onClick={callbackGoBack}>go back </button>
                    <div className="characters-div">
                        <div className="player--div">
                            {/*<Player player={player} name='chicken-rider'  />*/}
                            <EntranceAnimation stateProps={isStartBattle} element={ <Player player={player} name='chicken-rider'  />} />
                            {/*<LoopObject stateProps={isEntranceAnimation} element={<Player player={player} name='chicken-rider'  />} />*/}
                        </div>
                        <div className="filler-div">
                        </div>
                        <div className="enemy-div">
                            <Boing  stateProps={isHit} character={ <Enemy enemy={currentEnemy} /> }/>
                            {/*<Enemy   enemy={currentEnemy} />*/}
                        </div>
                    </div>
                    <ActionMenu handleAttack1={()=>handleAttack2(currentPlayer,currentEnemy)} />
                    <div className={isMessageOn?'message-div showMessage':' message-div hideMessage'}>
                      <Message  message={messageContent} />
                    </div>
                    <div className={isBattleOver?'show':'hide'}>
                        <EndBattleWindow isWin={isWinBattle} continueCallback={callbackGoBack} isGameOver={isGameOver}/>
                    </div>

                </div>
        </>
    )
}
export default Room