import React    from "react";
import './SettingsPage.css'
import PlayMusic from "../../componenets/SoundPlayer/PlayMusic";
import Button from "../../componenets/utility/Button/Button";
import {Link} from "react-router-dom";


const SettingsPage = () => {



    return(
        <div>
            <h1>
                settings
            </h1>
            <PlayMusic />
           <Link to='/' >
               <Button name='Back' />

           </Link>
        </div>
    )
}
export default SettingsPage