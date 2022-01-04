import React, {useEffect, useState} from "react";
import './CreatePlayerPage.css'
import Button from "../../componenets/utility/Button/Button";
import {Link} from "react-router-dom";
import {PlayerClass,Character} from "../../Data/Data";
import {AVATARS} from "../../Data/Data";
import getPlayersDataFromApi,{AddPlayer} from "../../Api/Api";
import DropDownMenu from "../../componenets/utility/DropDownMenu/DropDownMenu";
import PlaySound from "../../componenets/SoundPlayer/PlaySound";
import {SoundsList} from "../../Data/Data";

const CreatePlayerPage=({callback})=>{
    const[nameInputValue,setNameInputValue] = useState('Random Randy');
    const[avatarInputValue,setAvatarInputValue] = useState('ALONZO');
    const[playersList,setPlayersList] = useState([]);
    const[isDropDownMenu,setIsDropDownMenu] = useState(false)
    const[selectedAvatar,setSelectedAvatar]=useState('ALONZO')



    useEffect(()=>{
        const getData = async ()=>{
            const data= await getPlayersDataFromApi();
            return data.data
        }
         getData().then(res=>{
            setPlayersList(res)
        })
    },[])


    const handleOnChange =(e)=>{
         setNameInputValue(e.target.value);
         PlaySound(SoundsList['click1'],0.2)
    }


    const handleCreateNewPlayer =()=> {
         let newPlayer = new PlayerClass(Character['chickenRider']);
         // TODO:change id to unique id
         newPlayer.id=new Date()
         newPlayer.name=nameInputValue.substr(0,18).toUpperCase()
         newPlayer.avatar = AVATARS[avatarInputValue]
        console.log(AVATARS[avatarInputValue])
        AddPlayer(newPlayer)
        PlaySound(SoundsList['click3'],0.2)
       return  newPlayer
    }

   const updateLocalStorage=()=>{
        const player = handleCreateNewPlayer()
        localStorage.setItem('chicken', JSON.stringify(player));
    }
    const handleDropDownLoad=()=>{
        setIsDropDownMenu(!isDropDownMenu)
        const list=playersList
        PlaySound(SoundsList['click3'],0.2)
        return list

    }
    const handleChoosePlayer=(player)=>{
        console.log('ddd',player)
        setNameInputValue(player.name)
        setAvatarInputValue(player.avatar)
        setIsDropDownMenu(false)
        PlaySound(SoundsList['click3'],0.2)
        return callback(player)
    }
    const handleSelectedAvatarDiv=(name)=>{
        setSelectedAvatar(name)
        setNameInputValue(name);
        setAvatarInputValue(name)
        PlaySound(SoundsList['click3'],0.2)
    }
    return (
        <div className='create-page'>
            {/*<form action="">*/}
            <h3>Choose an Avatar</h3>
             <div className='avatars-div'>
                 {/*TODO:make a avatar-img-div component*/}
                 <div className={selectedAvatar==='ALONZO'?'avatar-img-div active':'avatar-img-div '} onClick={()=>handleSelectedAvatarDiv('ALONZO')} id='div1'>
                     {/*<input type="radio" id="avatar1" name="drone" value="ALONZO" onChange={handleRadioInputOnChange} defaultChecked={true}/>*/}
                         <label htmlFor="huey">ALONZO</label>
                         <img src={AVATARS['ALONZO']} alt="avatar1"/>
                 </div>
                 <div className={selectedAvatar==='The_KING'?'avatar-img-div active':'avatar-img-div '} onClick={()=>handleSelectedAvatarDiv('The_KING')}>
                     {/*<input type="radio" id="avatar2" name="drone" value="The_KING" onChange={handleRadioInputOnChange}/>*/}
                         <label htmlFor="The KING">The KING</label>
                     <img src={AVATARS['The_KING']} alt="avatar2"/>
                 </div>
                 <div className={selectedAvatar==='LOUIE'?'avatar-img-div active':'avatar-img-div '} onClick={()=>handleSelectedAvatarDiv('LOUIE')}>
                     {/*<input type="radio" id="avatar3" name="drone" value="LOUIE" onChange={handleRadioInputOnChange}/>*/}
                         <label htmlFor="LOUIE">LOUIE</label>
                     <img src={AVATARS['LOUIE']} alt="avatar3"/>
                 </div>
             </div>
            <div className='name-input-div'>
                <label htmlFor="nameInput">Enter Name  </label>
                <input  className='name-input' onChange={handleOnChange} name='nameInput' type="text" placeholder='Randy Rando' value={nameInputValue}/>
            </div>
            {/*</form>*/}
            <div className="CreateButtons-div">
                <Link to='/game'>
                    <Button callback={()=>updateLocalStorage()} className='create'  name='Create Character'  onMouseOver={()=>PlaySound(SoundsList['mouseOver3'],0.2)}/>
                </Link>
                <div className='loading-div'>
                    <Button callback={()=>handleDropDownLoad()} className='create load'  name='Load Character' onMouseOver={()=>PlaySound(SoundsList['mouseOver3'],0.2)}/>
                    <div className={isDropDownMenu?"dropDownMenu-div show":"dropDownMenu-div hide"}>
                        <DropDownMenu isOpenAnimation={isDropDownMenu} callback={handleChoosePlayer} list={playersList} />
                        <Button callback={()=>{
                            setIsDropDownMenu(!isDropDownMenu)
                            PlaySound(SoundsList['click3'],0.2)
                        }} className='create cancel'  name='Cancel Load'  onMouseOver={()=>PlaySound(SoundsList['mouseOver3'],0.2)} />
                    </div>
                </div>
                <Link to='/'>
                  <Button  callback={callback} className='create'  name='Back to Menu'  onMouseOver={()=>PlaySound(SoundsList['mouseOver3'],0.2)}/>
                </Link>
            </div>
        </div>
    )
}
export default CreatePlayerPage