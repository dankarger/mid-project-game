import React from "react";
import './TutorialPage.css'
import Button from "../../componenets/utility/Button/Button";
import {Link} from "react-router-dom";

const TutorialPage = () =>{


    return(
        <div className='tutorial-page'>
            <h1>Tutorial</h1>
            <div className="go-back">

                <Link to='/'><Button className='tutorial' name='Back to main menu' /> </Link>
            </div>


            <div className='tutorial-div'>
                <img src="/assets/images/readme/scrrenshot1.png" alt=""/>
                <div className='arrows-div'>
                    <div className='tutorial-player'>
                     <h3>   <strong>You</strong>  <span> <i className="fas fa-arrow-up"> </i> </span></h3>
                        <h3><strong>Enemy</strong>  <span><i className="fas fa-arrow-up"> </i> </span></h3>
                    </div>
                </div>
                    <div className='part1'>
                        <h3> - You need to defeat the enemy</h3>
                        <h3>
                            - You have two moving buttons -<strong>Attack</strong> and <strong>Deffend</strong>  .
                        </h3>
                        <h3> - When the enemy color is white use the <strong>Attack</strong> button</h3>
                        <h3> - When the enemy color is yellow use the <strong>Deffend</strong> button</h3>
                        <img src="/assets/images/readme/screenshot3.png" alt=""/>
                        <h3> -<strong> Be aware </strong>- using the wrong button will cause you damage </h3>
                        <h3>- Move through the Levels until you reach the finale Boss</h3>
                        <h2><strong>Good Luck!</strong></h2>
                        <img src="/assets/images/readme/screenshot2.png" alt=""/>

                    </div>

            </div>
            <Link to='/'><Button className='tutorial' name='Got it!' /> </Link>
        </div>
    )
}
export default TutorialPage