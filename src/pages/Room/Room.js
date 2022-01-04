import React, {useContext, useEffect, useRef, useState} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";
import {GameDataContext, SettingsPageContext} from "../../componenets/GameLogic/GameLogic";
import Message from "../../componenets/Message/Message";
import {EnemyClass} from "../../Data/Data";
import EndBattleWindow from "../../componenets/EndBattleWindow/EndBattleWindow";
import BoingAnimation, {EntranceAnimation} from "../../Data/Animations";
import {SoundsList} from "../../Data/Data";
import PlaySound from "../../componenets/SoundPlayer/PlaySound";
import MessagePlayer from "../../componenets/Message/Message2";

const Room=({player,callbackGoBack})=>{
         const currentRoomData = useContext(GameDataContext);
         // const currentPlayer = useContext(PlayerContext);
         const [currentPlayer,setCurrentPlayer]=useState(player)
         const {setIsSettings} =useContext(SettingsPageContext);
         const [currentEnemy,setCurrentEnemy] = useState({});
         const[isMessageOn,setIsMessageOn]=useState(false);
         const[messageContent,setIsMessageContent]=useState('');
         const[isAction,setisAction]=useState(false);
         const[isBattleOver,setIsBattleOver]= useState(false);
         const[isWinBattle,setIsWinBattle]=useState(true);
         const[isGameOver,setIsGameOver]=useState(false);
         const[isEntranceAnimation,setIsEntranceAnimation]=useState(true);
         const[isHit,setIsHit]=useState(false);
         const[isStartBattle,setIsStartBattle]=useState(Boolean);
         const[isEnemyAttacking,setIsEnemyAttacking]=useState(false);
         const numberOfEnemyAttack=useRef(null)
         const isPlayerMessageOn = useRef(false);
          const PlayerMessageContent = useRef('')

    const showMessage=(message, time)=> {
             setIsMessageContent(message)
             setIsMessageOn(true);
             setTimeout(()=>{
                 setIsMessageContent('')
                 setIsMessageOn(false);
             },time)
        }

        const showMessagePlayer = (message)=>{
             isPlayerMessageOn.current = true
             PlayerMessageContent.current = message
            setTimeout(()=>{
                isPlayerMessageOn.current = false
                PlayerMessageContent.current = ''

            },2000)

        }
        useEffect(()=>{
            setCurrentPlayer(player)
        },[player])
        useEffect(()=>{
            showMessage(`Level ${currentRoomData.value===0?1:currentRoomData.value}`,6000);
            showMessagePlayer(`Level ${currentRoomData.value===0?1:currentRoomData.value}`);
            PlaySound(SoundsList['whoosh2'])
                setIsStartBattle(true)
            const createNewEnemy=()=>{
                const newEnemy = new EnemyClass(currentRoomData.enemy);
                setCurrentEnemy(newEnemy);
            }
            createNewEnemy()
                setIsEntranceAnimation(false);
            return ()=>{
                setIsBattleOver(false);
            }
        }
        ,[currentRoomData.enemy,currentRoomData.value,isEntranceAnimation])

        const enemyDeath=()=>{
             setTimeout(()=>{
                 currentEnemy.currentImage=currentEnemy.images.death
                 setIsWinBattle(true);
                 setIsBattleOver(true);
                 PlaySound(SoundsList['trumpet2'])
             },1000)
                 if(currentEnemy.name==="BOSS"){
                     setIsGameOver(true)
                     PlaySound(SoundsList['trumpet4'])
                 }
        }

        const playerDeath=() =>{
            currentPlayer.currentImage=currentPlayer.images.death
            setIsWinBattle(false);
            setIsBattleOver(true);
            setIsGameOver(true);
            PlaySound(SoundsList['trumpet3'])
            showMessagePlayer('Dead')
        }

        const attackRandomValue =(number)=>{
             return Math.floor(Math.random()*number)
        }

        const handleDeffendButton=()=>{
             if(isEnemyAttacking){
                 handleAttack2(currentPlayer, currentEnemy)
             }else{
                 showMessagePlayer('You need to attack')
                 return handleAttack2(currentEnemy, currentPlayer)
             }
        }

        const attackManager=()=>{
             let randomNumber = attackRandomValue(10);
             if(randomNumber>5)return generateEnemyAttack()
            if(isEnemyAttacking) {
              showMessagePlayer('You need to defend')
                return  handleAttack2(currentEnemy,currentPlayer)
            }else{
                // showMessage('yeeeeaa',1000);

                return  handleAttack2(currentPlayer, currentEnemy)

            }
          }

        const handleAttack2 =(attacker,defender) => {
            setIsStartBattle(false)
            PlaySound(SoundsList['click1'],0.9)
        const damage = attackRandomValue(20)
        if(defender.health > damage) {
            setTimeout(()=>{
                PlaySound(defender.sounds.hit)
            },400)
            setTimeout(()=>{
                showMessage(`${defender.name} take  ${damage} damage`, 1500)
            },200)
            setisAction(!isAction)
            if(attacker===currentPlayer){
                setIsHit(!isHit)
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
        const generateEnemyAttack=()=>{
             if(!isEnemyAttacking) {
                 currentEnemy.currentImage = currentEnemy.images.hit;
                 setIsEnemyAttacking(true)
                     showMessagePlayer('You need to Deffend')
                         setTimeout(()=>{
                             currentEnemy.currentImage = currentEnemy.images.default;
                             setIsEnemyAttacking(false)
                         },3000)
             }}

    return(
        <>
                <div className='Room' style={{background:`${currentRoomData.image}`}}>
                    {/*<Button name='Settings' callback={()=>setIsSettings(setting=>!setting)} />*/}
                    {/*<Button name={"settings"} callback={}*/}
                    <Navbar currentPlayer={player} currentEnemy={currentEnemy} roomNumber={currentRoomData.value} callback={()=>setIsSettings(setting=>!setting)}/>
                    <div className="Room-img-div">
                        <img className='Room-img' src={currentRoomData.image} alt="room-img"/>
                    </div>
                    <div className="characters-div">
                        <div className="player--div">
                            <EntranceAnimation stateProps={isStartBattle} element={ <Player player={player} name='chicken-rider'  />} />
                        </div>
                        <div className="filler-div">
                        </div>
                        <div className="enemy-div">
                            <BoingAnimation  stateProps={isHit} character={ <Enemy enemy={currentEnemy} /> }/>
                        </div>
                    </div>
                    <ActionMenu disabled={isBattleOver} handleAttack1={()=>attackManager()} handleDeffend1={handleDeffendButton} />
                    <div className={isMessageOn?'message-div showMessage':' message-div hideMessage'}>
                      <Message  message={messageContent} />
                    </div>
                    <div className={isPlayerMessageOn.current?'message-div showMessage':' message-div hideMessage'}>
                        <MessagePlayer  message={PlayerMessageContent.current} />
                    </div>
                    <div className={isBattleOver?'show':'hide'}>
                        <EndBattleWindow isWin={isWinBattle} continueCallback={callbackGoBack} isGameOver={isGameOver}/>
                    </div>
                </div>
        </>
    )
}
export default Room