import React, {useState} from "react";
import './HomePage.css'
import Button from "../../componenets/utility/Button/Button";
import CreatePlayerPage from "../CreatePlayerPage/CreatePlayerPage";
import {Link} from "react-router-dom";

const HomePage = () => {
    const[isCreatePlayer,setIsCreatePlayer]=useState(false);

    const handleNewGameButton = ()=> {
        setIsCreatePlayer(true);

    }


    return(
        <div className='home-content'>
            <h1 className='title'>The Chicken Rider</h1>
           <div className='home-menu-divs'>
              <Button callback={handleNewGameButton} className='home-page'   name='New Game'/>
               <Link to='/settings' > <Button className='home-page'   name='Settings'/> </Link>
               <Link to='/' > <Button className='home-page'   name='Quit'/> </Link>
           </div>
            <div className={isCreatePlayer?'show':'hide'}>
                <CreatePlayerPage callback={()=>setIsCreatePlayer(!setIsCreatePlayer)}/>
            </div>

        </div>
    )
}
export default HomePage