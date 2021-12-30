import React    from "react";
import './HomePage.css'
import Button from "../componenets/utility/Button/Button";
import {Link} from "react-router-dom";

const HomePage = () => {



    return(
        <div className='home-page'>
            <h1>Title</h1>
           <div className='home-menu-divs'>
             <Link to='/game' > <Button className='home-page'  icon='s' name='New Game'/> </Link>
               {/*<Link to='/'> new</Link>*/}
               <Button className='home-page'  icon='s' name='Settings'/>
               <Button className='home-page'  icon='s' name='Quit'/>
           </div>

        </div>
    )
}
export default HomePage