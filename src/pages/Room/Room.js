import React, {useContext, useEffect, useRef, useState} from "react";
import './Room.css'
import Navbar from "../../componenets/Navbar/Navbar";
import ActionMenu from "../../componenets/ActionMenu/ActionMenu";
import Enemy from "../../componenets/Enemy/Enemy";
import Player from "../../componenets/Player/Player";
import {GameDataContext, SettingsPageContext} from "../../componenets/GameLogic/GameLogic";
// import {PlayerContext} from "../../componenets/gameApp/GameApp";
import Message from "../../componenets/Message/Message";
import {EnemyClass} from "../../Data/Data";
import EndBattleWindow from "../../componenets/EndBattleWindow/EndBattleWindow";
import Boing, {EntranceAnimation} from "../../Data/Animations";
import {SoundsList} from "../../Data/Data";
import PlaySound from "../../componenets/SoundPlayer/PlaySound";


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

         const showMessage=(message, time)=> {
             setIsMessageContent(message)
             setIsMessageOn(true);
             setTimeout(()=>{
                 // setIsMessageContent('')
                 // setIsMessageOn(false);
             },time)
        }

        useEffect(()=>{
            setCurrentPlayer(player)
        },[player])


        useEffect(()=>{
            showMessage(`Level ${currentRoomData.value===0?1:currentRoomData.value}`,6000);
            PlaySound(SoundsList['whoosh2'])
                setIsStartBattle(true)
            const createNewEnemy=()=>{
                const newEnemy = new EnemyClass(currentRoomData.enemy);
                setCurrentEnemy(newEnemy);
            }
            createNewEnemy()
                setIsEntranceAnimation(false);
            // randomEnemyAttack();
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
                 // currentEnemy.currentImage=currentEnemy.images.death
                 // setIsWinBattle(true);
                 // setIsBattleOver(true);

                 if(currentEnemy.name==="BOSS"){
                     console.log('wwwinnn')
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
        }

        const attackRandomValue =(number)=>{
             return Math.floor(Math.random()*number)
        }

        const attackManager=()=>{
             let randomNumber = attackRandomValue(10);
             if(randomNumber>5)return generateEnemyAttack()
            if(isEnemyAttacking) {
                showMessage('noooo',1000)
                return  handleAttack2(currentEnemy,currentPlayer)
            }else{
                showMessage('yeeeeaa',1000);
                return  handleAttack2(currentPlayer, currentEnemy)
            }

    }

        const handleAttack2 =(attacker,defender) => {

            setIsStartBattle(false)
            PlaySound(SoundsList['click1'],0.9)
        const damage = attackRandomValue(20)
        if(defender.health > damage) {
            // PlaySound(SoundsList['whoosh1']);
            setTimeout(()=>{
                PlaySound(defender.sounds.hit)
            },400)
            setTimeout(()=>{
                // defender.currentImage=defender.images.default
                showMessage(`${defender.name} take  ${damage} damage`, 1500)
            },200)
            setisAction(!isAction)
            showMessage(`${defender.name} take  ${damage} damage`, 1500)
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
             let randomizeNumber = Math.random()*4+1;
             randomizeNumber=1
             numberOfEnemyAttack.current=randomizeNumber;
             if(!isEnemyAttacking) {

                 changeEnemyImage(randomizeNumber)
                 setIsEnemyAttacking(true)
                 if (randomizeNumber === 1) {
                     changeEnemyImage(randomizeNumber)
                     setTimeout(() => {
                         showMessage('hhhhhh', 3000)
                         // currentEnemy.currentImage = currentEnemy.images.default;
                         setTimeout(()=>{
                             currentEnemy.currentImage = currentEnemy.images.default;
                             setIsEnemyAttacking(false)
                         },3000)

                     })
                 }
             }}

    const changeEnemyImage=(imageNumber)=> {
        if (imageNumber) {
            currentEnemy.currentImage = currentEnemy.images.hit;
            showMessage('EnemyAttacking', 3000);
            // }
            // setTimeout(()=>{
            //     currentEnemy.currentImage=currentEnemy.images.default;
            //     setIsEnemyAttacking(false)
            // },3000)

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
                    <ActionMenu disabled={isBattleOver} handleAttack1={()=>attackManager()} handleDeffend1={generateEnemyAttack} />
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