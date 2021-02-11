import React from "react";
import { Link } from "react-router-dom";
import earth from "../data/images/earth-2.svg";
import Footer from "../components/Footer";
import '../screen/Home.scss'

const Home = () => {
  return (
    <div>
      <section className="encart">
        <h1>Sauve la planète</h1>
        <figure className="figure">
          <img src={earth} alt="earth" />
          <figcaption></figcaption>
        </figure>
        <p>Découvre l'empreinte écologique de ton alimentation !</p>
  
        <Link to="/game" className="bouton">
          Sauve la planète
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
