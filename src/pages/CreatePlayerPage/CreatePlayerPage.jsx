import React, { useState } from "react";
import './CreatePlayerPage.css'
import Button from "../../componenets/utility/Button/Button";
import {Link} from "react-router-dom";
import {PlayerClass,Character} from "../../Data/Data";

const CreatePlayerPage=({createNewPlayer})=>{
    const[nameInputValue,setNameInputValue] = useState('Random Randy')


    const handleOnChange =(e)=>{
         setNameInputValue(e.target.value);
    }

    const handleCreateNewPlayer =()=> {
        let newPlayer = new PlayerClass(Character['chickenRider']);
        // TODO:change id to unique id
         newPlayer.id=new Date()

         newPlayer.name=nameInputValue.substr(0,18).toUpperCase()
        console.log('newplayer',newPlayer)
       return  newPlayer
    }

   const updateLocalStorage=()=>{

        const player = handleCreateNewPlayer()
        localStorage.setItem('chicken', JSON.stringify(player));
        console.log(localStorage)
    }

    return (
        <div className='create-page'>
            {/*<form action="">*/}
             <div className='avatars-div'>
                 <h3>Choose an Avatars</h3>

             </div>
                <label htmlFor="nameInput">Enter Name</label>
                <input onChange={handleOnChange} name='nameInput' type="text" placeholder='Randy Rando' value={nameInputValue}/>

            {/*</form>*/}
            <Link to='/game'>
                <Button callback={()=>updateLocalStorage()} className='create'  name='Create Characterddd' />
                <Button callback={()=>handleCreateNewPlayer()} className='create'  name='Create Character' />

            </Link>

        </div>
    )
}
export default CreatePlayerPage