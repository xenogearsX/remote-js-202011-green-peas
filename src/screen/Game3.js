import React from "react";
import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";
import Timer from "../components/Timer";

class Game3 extends React.Component {
  state={
      select: ""
  }
    render() {
    return (
      <>
        <ProgresBar />
        <h1>Choisi ton entrée</h1>
        <Timer />
        <img />
        <Select />
        <Link to="/bilan">Etape suivante</Link>
      </>
    );
  }
}

export default Game3;
