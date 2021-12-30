import React from "react";
import './MapPage.css'



const MapPage =({callback})=> {


    return (
        <div className='map'>

            <button onClick={()=>{callback(1)}} value='1' > </button>

        </div>
    )
}
export default MapPage