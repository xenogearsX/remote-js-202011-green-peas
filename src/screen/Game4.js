import React from "react";
import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";

import Timer from "../components/Timer";

const Game4 = () => {
  return (
    <div> 
        <ProgresBar indicator="75" width="75"/>
        <section className="encart">
        <Timer />
        <h2 className="titreJeux">
        <span>4</span> Choisi ton dessert</h2>
          <Select name="Dessert" />
          <Link to="/game5" className="bouton">Valider ton dessert</Link>
      </section>
    </div>
  );
};

export default Game4;
