import React from "react";
import Footer from "./Footer";
import Carousel from "./Carousel";

class Best extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
      {/* {facts.map((fact, index) => (
        <FactCards
          texte={fact.texte}
          icon={fact.icon}
          key={index}
          categorie={facts.categorie}
        />
      ))} */}
      <Footer />
    </div>
    );
  }
}

export default Best;
