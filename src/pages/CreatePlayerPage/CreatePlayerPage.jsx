import React, {useEffect, useState} from "react";
import './CreatePlayerPage.css'
import Button from "../../componenets/utility/Button/Button";
import {Link} from "react-router-dom";
import {PlayerClass,Character} from "../../Data/Data";
import {AVATARS} from "../../Data/Data";
import getPlayersDataFromApi,{AddPlayer} from "../../Api/Api";

const CreatePlayerPage=({callback})=>{
    const[nameInputValue,setNameInputValue] = useState('Random Randy');
    const[avatarInputValue,setAvatarInputValue] = useState('ALONZO');
    const[playersList,setPlayersList] = useState([])



    useEffect(()=>{
        const getData = async ()=>{
            const data= await getPlayersDataFromApi();
            return data.data
        }
        const playersList = getData().then(res=>{
            console.log('playerlist',res)
            setPlayersList(res)
        })
        console.log('playerlist',playersList)

    },[])


    const handleOnChange =(e)=>{
         setNameInputValue(e.target.value);
    }
    const handleRadioInputOnChange =(e)=>{
        console.log('dd',e.target.value)
        setNameInputValue(e.target.value);
        setAvatarInputValue(e.target.value)
    }

    const handleCreateNewPlayer =()=> {
        let newPlayer = new PlayerClass(Character['chickenRider']);
        // TODO:change id to unique id
         newPlayer.id=new Date()

         newPlayer.name=nameInputValue.substr(0,18).toUpperCase()
        newPlayer.avatar = AVATARS[avatarInputValue]
        console.log(AVATARS[avatarInputValue])
        console.log('newplayer',newPlayer)
        AddPlayer(newPlayer)
       return  newPlayer
    }

   const updateLocalStorage=()=>{

        const player = handleCreateNewPlayer()
        localStorage.setItem('chicken', JSON.stringify(player));
        console.log(localStorage)
    }
    const handleLoadPlayer=()=>{
        const list=playersList
        console.log('list',list)

    }

    return (
        <div className='create-page'>
            {/*<form action="">*/}
            <h3>Choose an Avatars</h3>
             <div className='avatars-div'>
                 {/*TODO:make a avatar-img-div component*/}
                 <div className='avatar-img-div'>
                     <input type="radio" id="avatar1" name="drone" value="ALONZO" onChange={handleRadioInputOnChange} defaultChecked={true}/>
                         <label htmlFor="huey">ALONZO</label>
                         <img src={AVATARS['ALONZO']} alt="avatar1"/>
                 </div>
                 <div className='avatar-img-div'>
                     <input type="radio" id="avatar2" name="drone" value="The_KING" onChange={handleRadioInputOnChange}/>
                         <label htmlFor="The KING">The KING</label>
                     <img src={AVATARS['The_KING']} alt="avatar2"/>
                 </div>
                 <div className='avatar-img-div'>
                     <input type="radio" id="avatar3" name="drone" value="LOUIE" onChange={handleRadioInputOnChange}/>
                         <label htmlFor="LOUIE">LOUIE</label>
                     <img src={AVATARS['LOUIE']} alt="avatar3"/>
                 </div>
             </div>
            <div>
                <label htmlFor="nameInput">Enter Name</label>
                <input onChange={handleOnChange} name='nameInput' type="text" placeholder='Randy Rando' value={nameInputValue}/>
            </div>
            {/*</form>*/}
            <Link to='/game'>
                <Button callback={()=>updateLocalStorage()} className='create'  name='Create Character' />
            </Link>
            <Button callback={()=>handleLoadPlayer()} className='create'  name='Load Character' />
            <Link to='/'>
            <Button callback={callback} className='create'  name='Cancel' />
            </Link>

        </div>
    )
}
export default CreatePlayerPage