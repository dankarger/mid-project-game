import React from "react";
import './CreatePlayerPage.css'
import Button from "../../componenets/utility/Button/Button";
import {Link} from "react-router-dom";

const CreatePlayerPage=()=>{

    return (
        <div className='create-page'>
            <form action="">
             <div className='avatars-div'>
                 <h3>Choose an Avatars</h3>

             </div>
                <label htmlFor="nameInput">Enter Name</label>
                <input name='nameInput' type="text" placeholder='Randy Rando'/>

            </form>
            <Link to='/game'><Button className='create'  name='Create Character' /></Link>

        </div>
    )
}
export default CreatePlayerPage