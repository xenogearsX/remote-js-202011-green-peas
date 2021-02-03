import React from 'react';
import './GameAccess.css';
import timer_earth from '../data/images/timer_earth.png';

class GameAccess extends React.Component {
    render (){
        return (
            <div className="BodyGame">
                <div className="Rules"> 
                    <div id="titleRules"> REGLES DU JEUX </div>
                    <img src={timer_earth} alt="timer-earth" id="imageEarth"/>
                    <p id="rulesText"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, numquam molestias? Error tempora expedita assumenda, aut optio inventore, voluptatem sapiente ullam consequatur repellat quia placeat voluptatum doloribus quisquam ipsa repudiandae! </p>
                 </div>
            </div>
        )
    }
}
export default GameAccess; 