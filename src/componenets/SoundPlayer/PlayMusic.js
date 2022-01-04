import React, {useState, useRef, useEffect, createRef} from "react";
import {SoundsList} from "../../Data/Data";
import './PlayMusic.css'
import Button from "../utility/Button/Button";
// import SettingsPage from "../../pages/SettingsPage/SettingsPage";


const PlayMusic=({isPlay,volume=.5})=>{
    const[isPlaying, setIsPlaying]=useState(isPlay)
    const[currentVolume,setCurrentVolume]=useState(0.5)
    const[isMute,setIsMute]=useState(false)
    // const[isMute,setIsMute]=createRef(false)
    const[prevVolume,setPrevVolume]=useState(currentVolume)
    const musicPlayer = useRef()


    const handlePlayMusic=()=>{
        // setIsPlaying(prevValue =>!!prevValue)
        if(isPlaying) {
            musicPlayer.current.volume=currentVolume
            musicPlayer.current.play()
            setIsMute(false)
        }else {
            // musicPlayer.current.pause()
        }
    }
    const handleMuteMusic2 =()=>{
        if(!isMute) {
            setPrevVolume(currentVolume)
            setCurrentVolume(0)
            setIsMute(true)
            console.log('muted',isMute)
        }else {
            setIsMute(false)
            setCurrentVolume(prevVolume)
            console.log('muted',isMute)

        }
    }
    const handleChangeVolume=(e)=>{
        setCurrentVolume(e.target.value)
        musicPlayer.current.volume=currentVolume
        // console.log('volume',currentVolume)
    }
    useEffect(()=>{
        musicPlayer.current.volume=currentVolume
        setIsPlaying(isPlay)
        // setPrevVolume(currentVolume)
        // setIsMute(false)
        // setIsPlaying(isPlaying)
        handlePlayMusic()
    },[isPlay,handlePlayMusic,currentVolume])

    // const handleMuteMusic=()=> {
    //     musicPlayer.current.mute=true
    // }
    return(
        <div>
            {/*<SettingsPage>*/}
                <div className='play-music'>
                    <audio ref={musicPlayer} src={SoundsList['music1']}> </audio>
                    {/*<button>play {FaPlay()}</button>*/}
                    {/*<Button callback={()=>handlePlayMusic()} name='play/pause' className='audio' />*/}
                    <h2>Settings</h2>
                    <h4>Music Level</h4>
                    <input name='mute' type="checkbox" checked={isMute} onChange={handleMuteMusic2}/>
                    <label htmlFor="mute"> Mute</label>
                    {/*<Button callback={()=>handlePlayMusic()} name='play' className='audio' />*/}
                    <input  min='0'
                            max='1'
                            step='.05' className='volume' type="range" onChange={handleChangeVolume} value={currentVolume}/>
                    {/*<label htmlFor="mute">Mute</label>*/}
                    {/*<input onChange={handleMuteMusic} name='mute' type="checkbox"/>*/}
                </div>

            {/*</SettingsPage>*/}



        </div>
    )
}
export default PlayMusic

