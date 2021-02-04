import GameAccess from "../components/GameAccess";
import ProgresBar from "../components/ProgresBar";
import React from "react";

class Game extends React.Component {
  render() {
    return (
      <>
        <ProgresBar />
        <GameAccess />
      </>
    );
  }
}
export default Game;
