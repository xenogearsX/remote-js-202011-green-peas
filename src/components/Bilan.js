import React from 'react'
import {Link} from 'react-router-dom'
import Footer from "../components/Footer";
import '../screen/Bilan.scss'
import earthfoutu from "../data/images/dead_earth.svg";
class Bilan extends React.Component {

    render(){
        return(
            <div>
            <section className="encartBilan">
              <h1>Bilan</h1>
              <p>Voici ton score !</p>
              <p className="Score">30/100</p>
              <figure className="figure">
                <img src={earthfoutu} alt="earth" />
              </figure>
              <p>Désolé avec un score pareil on va pas aller loin</p>
        
              <Link to="/game" className="bouton">
                Rejouer
              </Link>
            </section>
            <Footer/>
          </div>
        )
    }
}
export default Bilan