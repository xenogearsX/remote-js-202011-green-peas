import React from 'react';
import Timer from './Timer';
import './GameAccess.css';
import timer_earth from '../data/images/timer_earth.png';


class GameAccess extends React.Component {
    render (){
        return (
            <div className="BodyGame">
                <div className="introRules">
                    <div className="Rules"> 
                         <div id="titleRules"> REGLES DU JEUX </div>
                         <p id="rulesTextIntro"> Tu as une faim de 🐺 ? Alors commence le jeu et créé ton menu Entrée + Plat + Dessert + Boisson  😋 </p>
                    </div>
                    <div id="imageDiv"><img src={timer_earth} alt="timer-earth" id="imageEarth"/></div>
                </div>       
                <div className="Bar"></div>
                <div className="AstuceParag">                   
                    <div className="Astuce">💚 Astuces </div>
                    <p id="rulesText">⚠️ #1 Tu dois prendre tes décisions rapidement car la 🌍 est déjà en danger 
                    <br></br> ⚠️ #2 Pense que chacun de tes choix à un impact 🔥 sur la planète </p>
                </div>
                <div className="ButtonStart"><Timer /></div> 
            </div>
        )
    }
}


export default GameAccess; 