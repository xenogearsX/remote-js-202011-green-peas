import React from "react";
import { Link } from "react-router-dom";
import Select from "../components/Select";
import Timer from "../components/Timer";
import ProgresBar from "../components/ProgresBar";
import "./Game.scss";

class Game2 extends React.Component {
  render() {
    return (
      <div>
        <ProgresBar indicator={75} width={75} />
        <section className="encart">
          <Timer />
          <h2 className="titreJeux">
            <span>2</span>Choisis ton plat
          </h2>
          <Select
            name="Plat"
            handleScoreGlobal={this.props.location.data.handleScoreGlobal}
          />
          <Link
            to={{
              pathname: "/game3",
              data: {
                handleScoreGlobal: this.props.location.data.handleScoreGlobal,
              },
            }}
            className="bouton"
          >
            Valider ton plat
          </Link>
        </section>
      </div>
    );
  }
}

export default Game2;
