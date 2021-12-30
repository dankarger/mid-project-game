import React from "react";
import './ActionMenu.css'
import Button from "../utility/Button/Button";

const ActionMenu =() => {




    return (
        <div className='action-menu'>
            <div className='action-buttons-div'>
                <div className="shader-div ">
                     <Button className='action'  icon='s' name='Attack1'/>
                     <Button className='action'  icon='s' name='Attack2'/>
                     <Button className='action' icon='p' name='Power'/>
                     <Button className='action' icon='i' name='Inventory'/>
                </div>
            </div>
        </div>
    )
}
export default ActionMenu