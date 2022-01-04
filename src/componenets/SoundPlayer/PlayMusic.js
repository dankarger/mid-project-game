import React, {useState, createRef, useRef, useEffect} from "react";
import {SoundsList} from "../../Data/Data";
import './PlayMusic.css'
import {FaPlay} from "react-icons/fa";
import Button from "../utility/Button/Button";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";


const PlayMusic=({isPlay})=>{
    const[isPlaying, setIsPlaying]=useState(Boolean)
    const musicPlayer = useRef()

    const handlePlayMusic=()=>{
        // setIsPlaying(prevValue =>!!prevValue)
        if(isPlaying) {
            musicPlayer.current.play()
        // }else {
        //     musicPlayer.current.pause()
        }
    }
    useEffect(()=>{
        setIsPlaying(isPlay)
        handlePlayMusic()
    },[isPlay,handlePlayMusic])

    const handleMuteMusic=()=> {
        musicPlayer.current.mute=true
    }
    return(
        <div>
            {/*<SettingsPage>*/}
                <div className='play-music'>
                    <audio ref={musicPlayer} src={SoundsList['music1']}> </audio>
                    <button>play {FaPlay()}</button>
                    <Button callback={()=>handlePlayMusic()} name='play' className='audio' />
                    <input className='volume' type="range"/>
                    <label htmlFor="mute">Mute</label>
                    <input onChange={handleMuteMusic} name='mute' type="checkbox"/>
                </div>

            {/*</SettingsPage>*/}



        </div>
    )
}
export default PlayMusic

