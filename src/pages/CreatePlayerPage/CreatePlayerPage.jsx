import React, { useState } from "react";
import './CreatePlayerPage.css'
import Button from "../../componenets/utility/Button/Button";
import {Link} from "react-router-dom";
import {PlayerClass,Character} from "../../Data/Data";

const CreatePlayerPage=({callback})=>{
    const[nameInputValue,setNameInputValue] = useState('Random Randy')
    const[avatarInputValue,setAvatarInputValue] = useState('Avatar1')


    const handleOnChange =(e)=>{
         setNameInputValue(e.target.value);
    }
    const handleRadioInputOnChange =(e)=>{
        setNameInputValue(e.target.value);
        setAvatarInputValue(e.target.value)
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
            <h3>Choose an Avatars</h3>
             <div className='avatars-div'>

                 <div>
                     <input type="radio" id="avatar1" name="drone" value="ALONZO" onChange={handleRadioInputOnChange}/>

                         <label htmlFor="huey">ALONZO</label>
                         <img src="/assets/images/characters/avatar1.png" alt="avatar1"/>
                 </div>

                 <div>
                     <input type="radio" id="avatar2" name="drone" value="The KING" onChange={handleRadioInputOnChange}/>
                         <label htmlFor="The KING">The KING</label>
                     <img src="/assets/images/characters/avatar2.png" alt="avatar2"/>
                 </div>

                 <div>
                     <input type="radio" id="avatar3" name="drone" value="LOUIE" onChange={handleRadioInputOnChange}/>
                         <label htmlFor="LOUIE">LOUIE</label>
                     <img src="/assets/images/characters/avatar3.png" alt="avatar3"/>
                 </div>


             </div>
            <div>
                <label htmlFor="nameInput">Enter Name</label>
                <input onChange={handleOnChange} name='nameInput' type="text" placeholder='Randy Rando' value={nameInputValue}/>
            </div>
            {/*</form>*/}
            <Link to='/game'>
                <Button callback={()=>updateLocalStorage()} className='create'  name='Create Character' />
                <Button callback={()=>handleCreateNewPlayer()} className='create'  name='Load Character' />
            </Link>
            <Link to='/'>
            <Button callback={callback} className='create'  name='Cancel' />
            </Link>

        </div>
    )
}
export default CreatePlayerPage