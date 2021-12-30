import React from "react";
import './CreatePlayerPage.css'
import Button from "../../componenets/utility/Button/Button";


const CreatePlayerPage=()=>{

    return (
        <div className='create-page'>
            <form action="">
             <div className='avatars-div'>
                 <h3>Choose an Avatars</h3>

             </div>
                <label htmlFor="nameInput">Enter Name</label>
                <input name='nameInput' type="text" placeholder='Randy Rando'/>
                <Button className='create'  name='Create Character' />
            </form>

        </div>
    )
}
export default CreatePlayerPage