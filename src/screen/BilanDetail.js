import React from "react";
import Footer from "../components/Footer";
import defaultImgDish from "../data/images/dish.svg";

import "./BilanDetail.scss";

class BilanDetail extends React.Component {
  state = {
    imgDefault: defaultImgDish,
  };
  render() {
    return (
      <div className="">
        <section className="encart">
          <h1>Détail du bilan de votre menu</h1>
          <p className="Score">{this.props.score.toFixed(2)} kg CO2 </p>
        </section>

        {/* Section choix du plat avec empreinte néfaste */}

        <section className="encart">
          <h3>
            Le plat X (maj props à mettre ici) avec ce score ef est celui qui a
            l'impact le plus néfaste sur l'environnement
          </h3>
          {this.props.menu.map((food) => (
            <p>{food.name + " " + food.carbone}</p>
          ))}

          {this.props.menu
            .sort(function (a, b) {
              return a.carbone - b.carbone;
            })
            .map((food) => (
              <p>{food.name + " " + food.carbone}</p>
            ))}
            
          <div className="platNefaste">
            <img
              className="dish"
              src={this.state.imgDefault}
              alt={this.state.imgDefaultAlt}
            />
            <div>
              <h4>Empreinte carbone : 2t. CO2</h4>
              <p>
                Props texte infos Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo c
              </p>
            </div>
          </div>
        </section>

        {/* Sections des alternatives */}

        <section className="encart">
          <h3>Nos conseils avec des alternatives</h3>
          <div className="platNefaste">
            <img
              className="dish"
              src={this.state.imgDefault}
              alt={this.state.imgDefaultAlt}
            />
            <div>
              <h4>Empreinte carbone : 2t. CO2</h4>
              <p>
                Props texte infos Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo c
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default BilanDetail;
