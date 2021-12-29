import React from "react";
import './ActionMenu.css'
import Button from "../utility/Button/Button";

const ActionMenu =() => {




    return (
        <div className='action-menu'>
            <div className='action-buttons-div'>
                <div className="shader-div">
                     <Button className='action-item' icon='sword-icon' name='Attack1'/>
                     <button className='action-item '>Attack2</button>
                     <button className='action-item'>Power <span>Health</span></button>
                </div>
            </div>
        </div>
    )
}
export default ActionMenu