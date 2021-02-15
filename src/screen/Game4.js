import React from "react";
import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";

import Timer from "../components/Timer";

class Game4 extends React.Component {
  render() {
    return (
      <div>
        <ProgresBar indicator={215} width={215} />
        <section className="encart">
          <Timer />
          <h2 className="titreJeux">
            <span>4</span> Choisis ton dessert
          </h2>
          <Select
            name="Dessert"
            handleScoreGlobal={this.props.location.data.handleScoreGlobal}
          />
          <Link
            to={{
              pathname: "/game5",
              data: {
                handleScoreGlobal: this.props.location.data.handleScoreGlobal,
              },
            }}
            className="bouton"
          >
            Valider ton dessert
          </Link>
        </section>
      </div>
    );
  }
}

export default Game4;
