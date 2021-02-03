import React from 'react';
import './GameAccess.css';
import timer_earth from '../data/images/timer_earth.png';

class GameAccess extends React.Component {
    render (){
        return (
            <div className="BodyGame">
                <div className="Rules"> 
                    <img src={timer_earth} alt="timer-earth" id="imageEarth"/>
       
                 </div>
            </div>
        )
    }
}
export default GameAccess; 