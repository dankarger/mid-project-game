import React from "react";
import './ActionMenu.css'
import Button from "../utility/Button/Button";

const ActionMenu =({handleAttack1,handleDeffend1,disabled}) => {

    return (
        <div className='action-menu'>
            <div className='action-buttons-div'>
                <div className="shader-div ">
                     <Button disabled={disabled} callback={handleAttack1} className='action'  icon='s' name='Attack1'/>
                     <Button disabled={disabled} callback={handleDeffend1} className='action'  icon='s' name='Deffend1'/>
                     <Button disabled={disabled} className='action' icon='p' name='Power'/>
                     <Button disabled={disabled} className='action' icon='i' name='Item' />
                </div>
            </div>
        </div>
    )
}
export default ActionMenu