import React, {useState} from "react";
import './HomePage.css'
import Button from "../../componenets/utility/Button/Button";
import CreatePlayerPage from "../CreatePlayerPage/CreatePlayerPage";
import PlaySound from "../../componenets/SoundPlayer/PlaySound";
import {SoundsList} from "../../Data/Data";
import SettingsPage from "../SettingsPage/SettingsPage";
import {Link} from "react-router-dom";

// import {SettingsPageContext} from "../../componenets/GameLogic/GameLogic";





const HomePage = ({callbackSetting}) => {
    const[isCreatePlayer,setIsCreatePlayer]=useState(false);
    // const[isPlayMusic,setIsPlayMusic] = useState(false)
    const[isSettingPage]=useState(false)
    // const {setIsSettings} =useContext(SettingsPageContext);


    const handleNewGameButton = ()=> {
        setIsCreatePlayer(true);
        // setIsPlayMusic(true)
        PlaySound(SoundsList['click1'],0.1)
    }


    return(
        <div className='home-content'>
            <h1 className='title'><p>The</p> Chicken Rider</h1>
           <div className='home-menu-divs'>
               <div>
                   <Button  callback={handleNewGameButton} className='home-page'   name='New Game'/>
               </div>
               <Link to='/tutorial' > <Button callback={()=>PlaySound(SoundsList['click1'],0.2)} className='home-page'   name='Tutorial'/> </Link>
           </div>
            <div className={isCreatePlayer?'show':'hide'}>
                <CreatePlayerPage callback={()=>setIsCreatePlayer(!setIsCreatePlayer)}/>
            </div>
            <div className={isSettingPage?'show':'hide'}>
                hhhhhhhhhhhh
                <SettingsPage />
            </div>
            {/*<PlayMusic isPlay={isPlayMusic}/>*/}
        </div>
    )
}
export default HomePage