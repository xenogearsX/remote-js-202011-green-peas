import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import ProgresBar from "../components/ProgresBar";
import Select from "../components/Select";
import Timer from "../components/Timer";

import "./Game.scss";

class Game1 extends React.Component {
  componentDidMount() {
    this.props.resetScore()
  }
  render() {
    return (
      <div>
        <ProgresBar indicator={5} width={5} />
        <section className="encart">
          <Timer />
          <h2 className="titreJeux">
            <span>1</span>Choisis ton entrée
          </h2>
          <Select name="Entrée" handleScoreGlobal={this.props.handleScoreGlobal}/>
          <Link
            to={{
              pathname: "/game2",
              data: {
                handleScoreGlobal: this.props.handleScoreGlobal,
              },
            }}
            className="bouton off" 
          >
            Valider ton entrée
          </Link>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Game1;
