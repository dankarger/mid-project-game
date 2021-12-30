import React    from "react";
import './HomePage.css'
import Button from "../../componenets/utility/Button/Button";
import CreatePlayerPage from "../CreatePlayerPage/CreatePlayerPage";
import {Link} from "react-router-dom";

const HomePage = () => {



    return(
        <div className='home-content'>
            <h1>Title</h1>
           <div className='home-menu-divs'>
             <Link to='/game' > <Button className='home-page'  icon='s' name='New Game'/> </Link>
               <Link to='/settings' > <Button className='home-page'  icon='s' name='Settings'/> </Link>
               <Link to='/game' > <Button className='home-page'  icon='s' name='Quit'/> </Link>
           </div>
            <CreatePlayerPage />
        </div>
    )
}
export default HomePage