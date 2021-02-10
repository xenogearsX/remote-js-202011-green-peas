import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";
import Timer from "../components/Timer";

class Game1 extends React.Component {
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
        <Link to="/game2">Etape suivante</Link>
        <Footer />
      </>
    );
  }
}

export default Game1;
