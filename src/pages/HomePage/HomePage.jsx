import React, {useState} from "react";
import './HomePage.css'
import Button from "../../componenets/utility/Button/Button";
import CreatePlayerPage from "../CreatePlayerPage/CreatePlayerPage";
import {Link} from "react-router-dom";
import PlaySound from "../../componenets/SoundPlayer/PlaySound";
import {SoundsList} from "../../Data/Data";
import SettingsPage from "../SettingsPage/SettingsPage";

const HomePage = ({callbackSetting}) => {
    const[isCreatePlayer,setIsCreatePlayer]=useState(false);
    // const[isPlayMusic,setIsPlayMusic] = useState(false)
    const[isSettingPage,setIsSettingPage]=useState(false)


    const handleNewGameButton = ()=> {
        setIsCreatePlayer(true);
        // setIsPlayMusic(true)
        PlaySound(SoundsList['click1'],0.2)
    }


    return(
        <div className='home-content'>
            <h1 className='title'><p>The</p> Chicken Rider</h1>
           <div className='home-menu-divs'>
              <Button callback={handleNewGameButton} className='home-page'   name='New Game'/>
               {/*<Link to='/settings' > <Button className='home-page'   name='Settings'/> </Link>*/}
               <Link to='/' > <Button className='home-page'   name='Quit'/> </Link>
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