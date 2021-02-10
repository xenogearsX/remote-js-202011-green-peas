import GameAccess from "../components/GameAccess";
import ProgresBar from "../components/ProgresBar";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


class Game extends React.Component {
  render() {
    return (
      <>
        <h1>Jeux : Etape 1</h1>
        <Link to="/game1">Démarrer le jeu</Link>
        <ProgresBar />
        <GameAccess />
        <Footer />
      </>
    );
  }
}
export default Game;
