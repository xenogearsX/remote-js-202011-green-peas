import React from 'react'
import Footer from '../components/Footer'
import defaultImgDish from "../data/images/dish.svg";

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
 
                <section className="encartBilan">
                <h1>Bilan de ton menu</h1>
                <p>
                    {ScoreMenu > ScoreMoyenne 
                    ? 'Désolé avec un score pareil on va pas aller loin' 
                    : 'Bravo grâce à toi il neige encore un peu en hiver' 
                    }
              </p>

                <h2>Total de ta consommation</h2>
                
                        <p className={ScoreMenu > ScoreMoyenne ? 'Score' : 'Score Good' }>
                        {ScoreMenu} kg CO2 
                        </p>
                <h3>
                    Le plat le plus néfaste <br/>
                    {this.props.menu.sort(function(a, b){ return b.carbone - a.carbone })[0].name} 
                    <span className="koCo2">({this.props.menu[0].carbone} kg CO2)</span>
                </h3>

                

                <div className="platNefaste">
                {/* <img
                        className="dish"
                        src={this.state.imgDefault}
                        alt={this.state.imgDefaultAlt}
                        /> */}
                      <div>
                    
                </div>  
                </div>
                </section>

                
                <Footer />
            </div>
        )
    }
}

export default BilanDetail
