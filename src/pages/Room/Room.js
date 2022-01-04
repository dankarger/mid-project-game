import React, {useContext, useEffect, useState} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";
import {GameDataContext, SettingsPageContext} from "../../componenets/GameLogic/GameLogic";
import {PlayerContext} from "../../componenets/gameApp/GameApp";
import Message from "../../componenets/Message/Message";
import {EnemyClass} from "../../Data/Data";
import EndBattleWindow from "../../componenets/EndBattleWindow/EndBattleWindow";
import Boing, {EntranceAnimation} from "../../Data/Animations";
import {SoundsList} from "../../Data/Data";
import PlaySound from "../../componenets/SoundPlayer/PlaySound";
import Button from "../../componenets/utility/Button/Button";

// import SettingsPage from "../SettingsPage/SettingsPage";
// import Message2 from "../../componenets/Message/Messgae2";

const Room=({player,callbackGoBack})=>{
         const currentRoomData = useContext(GameDataContext)
         const currentPlayer = useContext(PlayerContext)
         // const [isSettings,setIsSettings ]= useState(SettingsPageContext)
         const {isSettings,setIsSettings} =useContext(SettingsPageContext)

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
                 // setIsMessageContent('')
                 // setIsMessageOn(false);
             },time)
        }

        useEffect(()=>{
            showMessage(`Level ${currentRoomData.value===0?1:currentRoomData.value}`,6000);
            PlaySound(SoundsList['whoosh2'])
            // setIsEntranceAnimation(true);
                setIsStartBattle(true)
            // showMessage('Your Turn',3700)
            const createNewEnemy=()=>{
                const newEnemy = new EnemyClass(currentRoomData.enemy);
                setCurrentEnemy(newEnemy);
            }
            createNewEnemy()
                setIsEntranceAnimation(false);
            // randomEnemyAttack();
            return ()=>{
                setIsBattleOver(false);
                // setIsEntranceAnimation(false);
            }
        }
        ,[currentRoomData.enemy,currentRoomData.value,isEntranceAnimation])

        const enemyDeath=()=>{
                 currentEnemy.currentImage=currentEnemy.images.death
                 setIsWinBattle(true);
                 setIsBattleOver(true);
                PlaySound(SoundsList['swish'])
                 if(currentEnemy.name==="BOSS"){
                     console.log('wwwinnn')
                     setIsGameOver(true)
                     PlaySound(SoundsList['swish'])
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
            PlaySound(SoundsList['click1'],0.9)
        const damage = attackRandomValue()
        if(defender.health > damage) {
            // defender.currentImage=defender.images.hit
            PlaySound(SoundsList['whoosh1']);
            setTimeout(()=>{
                PlaySound(currentEnemy.sounds.hit)
            },400)
            setTimeout(()=>{
                // defender.currentImage=defender.images.default
                showMessage(`${defender.name} take  ${damage} damage`, 1500)
            },200)
            setisAction(!isAction)
            showMessage(`${defender.name} take  ${damage} damage`, 1500)
            if(attacker===currentPlayer){
                setIsHit(!isHit)
                // randomEnemyAttack()
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
        // const randomEnemyAttack=()=>{
        //      if(isBattleOver){
        //          return
        //      }
        //     let randomize = Math.random()*10+1
        //     setInterval(()=>{
        //         currentEnemy.currentImage=currentEnemy.images.hit;
        //
        //     },randomize)
        //
        //     currentEnemy.currentImage=currentEnemy.images.hit;
        //     setTimeout(()=>{
        //
        //         handleAttack2(currentEnemy,player)},randomize)
        //
        //
        //     let damage = attackRandomValue()
        //     showMessage('Hiii',damage)
        //      // randomize>0.3? handleAttack2(currentEnemy,player):''
        //     // return randomEnemyAttack()
        // }

    return(
        <>
                <div className='Room' style={{background:`${currentRoomData.image}`}}>
                    {/*<Button name='Settings' callback={()=>setIsSettings(setting=>!setting)} />*/}
                    {/*<Button name={"settings"} callback={}*/}
                    <Navbar currentPlayer={player} currentEnemy={currentEnemy} roomNumber={currentRoomData.value} callback={()=>setIsSettings(setting=>!setting)}/>
                    <div className="Room-img-div">
                        <img className='Room-img' src={currentRoomData.image} alt="room-img"/>
                    </div>
                    {/*<button onClick={callbackGoBack}>go back </button>*/}
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
                    {/*<Message  message={messageContent} />*/}
                    {/*<Message2 it={messageContent}/>*/}
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