import React from 'react'
import Footer from '../components/Footer'
// Import images
import defaultImgDish from "../data/images/dish.svg";
import lamp from '../data/images/lamp.png';
import suvcar from '../data/images/suvcar.png';
// Import css
import './BilanDetail.scss'
import './Bilan.scss'

class BilanDetail extends React.Component {
    state = {
        imgDefault: defaultImgDish,
      };
    render(){

    const ScoreMenu  = this.props.score.toFixed(2)
    const ScoreMoyenne = this.props.scoreMoyenne
    
    return(
            <div className="">
                   <section className="encart">
                    <h1>Bilan de ton menu</h1>
                    {/* Score total affiché sur la barre de score */}
                    <p className="ScoreDetail" style={{marginLeft:this.props.score.toFixed(2)*(320/80)}}>
                    {((this.props.score)*10/80).toFixed(2)}
                    </p>
                    {/* barre de score */}
                    <div className="scoreVulgEchelle"></div>
                    {/* container pour mettre en page valeurs minimales et maximales sur barre de score */}
                    <div className="EchelleValeurs">
                    <p className="valeursEch">0</p>
                    <p className="valeursEch">10</p>
                    </div>
                    {/* texte explication données min et max */}
                    <p className="explications">* Echelle d'impact selon les choix effectués pour le menu</p>

                    <p>
                    {ScoreMenu > ScoreMoyenne 
                    ? 'Désolé avec un score pareil on va pas aller loin' 
                    : 'Bravo grâce à toi il neige encore un peu en hiver' 
                    }
                    </p>

                    <h3>
                    Mais l'aliment<br/>
                    {this.props.menu.sort(function(a, b){ return b.carbone - a.carbone })[0].name} 
                    <span className="koCo2">({this.props.menu[0].carbone} kg CO2)</span> {" "}
                    est le plus néfaste pour l'environnement.
                    </h3>
            </section>
            

                <section className="encartBilan">
                    <h3>Tes choix</h3>
                    <ul>
                    {this.props.menu.map(food=><li>{food.name + " " + food.carbone}</li>)}
                </ul>

                <h3>
                              Tout ça a l'air très appétissant mais tes {(this.props.score.toFixed(2))}kg de Co2 générés sont équivalents à : 
                          </h3>

           
                    <div className="textVulg">
                       
                          <img className='imgiconLamp' image src={lamp} alt='lamp.png'/>
                          <p>
                          <span className='nbjours'>{(this.props.score.toFixed(0))*2}</span>  jours d'éclairage d'1 ampoule</p>
                            <h3>OU</h3>
                            <div className="animSuv">
                            <img className='imgiconSuv' src={suvcar} alt='suv-car'/>
                            <div className='contRoad'>
                            <div className='road'>------|----------<span className="chicken">🐓</span>-------------------|--------------|------------<span className="chicken">🐓</span>--------------|--------------------<span className="chicken">🐓</span>-------------------|---------<span className="chicken">🐓</span>------------|---------------------|------------<span className="chicken">🐓</span>-----------------------------------------|--</div>
                            </div>
                            </div>
                            <p><span className='nbjours'>{(this.props.score*9).toFixed(0)}</span>  km en SUV </p>
                    </div>  
                </section>

       
        <div className="Footer">            
        <Footer />
        </div>
      </div>
    );
  }
}

export default BilanDetail;
