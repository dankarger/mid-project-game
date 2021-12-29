import React from "react";
import './MapPage.css'
import {Link} from "react-router-dom";


const MapPage =()=> {


    return (
        <div className='map'>

            {/*<img className='map-im' src={img} alt="map-img"/>*/}
            map
            <Link to='/room'> Choose</Link>
        </div>
    )
}
export default MapPage