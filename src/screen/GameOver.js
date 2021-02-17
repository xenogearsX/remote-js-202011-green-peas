import React from "react";
import { Link } from "react-router-dom";

class GameOver extends React.Component {
  render() {
    return (
      <div className="gameover">
        <section className="encart">
          <h1>Game Over</h1>
          <h2 className="titreJeux">
            Tu as mis trop de temps !
            <br />
            La planète n'attend pas !
          </h2>
          <Link to="/game1" className="bouton">
            Rejoue
          </Link>
        </section>
      </div>
    );
  }
}
export default GameOver;
