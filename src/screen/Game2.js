import React from "react";
import {
  Link,
} from "react-router-dom";
import Select from "../components/Select";
import Timer from "../components/Timer";
import ProgresBar from "../components/ProgresBar";
import './Game.scss'

class Game2 extends React.Component {
  render() {
    return (
      <div>
      <ProgresBar indicator="75" width="75"/>
      <section className="encart">
      <Timer />
        <h2 className="titreJeux">
        <span>2</span> Choisi ton plat</h2>
          <Select name="Plat" />
          <Link to='/game3' className="bouton">Valider votre plat</Link>
        </section>
    </div>
    );
  }
}

export default Game2;
