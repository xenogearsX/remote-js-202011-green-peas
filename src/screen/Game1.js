import React from "react";
import Footer from "../components/Footer";
import Starters from "../data/images/starters.svg";
import {
  Link,
} from "react-router-dom"; 

import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";
import Timer from "../components/Timer";


import './Game.scss'

class Game1 extends React.Component {
  render() {
    return (
      <div>
      <ProgresBar indicator={5} width={5}/>
      <section className="encart">
      <Timer />
        <h2 className="titreJeux">
        <span>1</span>Choisi ton entrée</h2>
          <Select name='Entrée'/>
          <Link to="/game2" className="bouton off">Valider votre entrée</Link>
      </section>
      <Footer />
    </div>
    );
  }
}

export default Game1;
