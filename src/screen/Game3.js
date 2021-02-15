import React from "react";
import { Link } from "react-router-dom";
import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";
import Timer from "../components/Timer";

class Game3 extends React.Component {
  render() {
    return (
      <div>
        <ProgresBar indicator={145} width={145} />
        <section className="encart">
          <Timer />
          <h2 className="titreJeux">
            <span>3</span>Choisis ton accompagnement
          </h2>
          <Select
            name="Accompagnement"
            handleScoreGlobal={this.props.location.data.handleScoreGlobal}
          />
          <Link
            to={{
              pathname: "/game4",
              data: {
                handleScoreGlobal: this.props.location.data.handleScoreGlobal,
              },
            }}
            className="bouton"
          >
            Valider ton accompagnement
          </Link>
        </section>
      </div>
    );
  }
}

export default Game3;
