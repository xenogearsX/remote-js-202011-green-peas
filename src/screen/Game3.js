import React from "react";
import { Link } from "react-router-dom";
import Select from "../components/Select";

const Game3 = () => {
  return (
    <div>
      <h1>Choix du dessert</h1>
      <Select />
      <img alt='not yet' />
      <Link to="/bilan">Passer au bilan</Link>
    </div>
  );
};

export default Game3;
