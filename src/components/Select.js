import React, { Component } from 'react';
import test from "../data/json/test.json"
import defaultImgDish from "../data/images/dish.svg"

export default class Select extends Component {
state = {
  imgDefault : defaultImgDish,
  imgDefaultAlt : 'Choisis ton entrée',
  classBt : 'bouton off'
}
render() {
const gameFood = test.filter(data => data['Catégorie Jeux'].includes(this.props.name))
const remainingGameFood = gameFood.slice(0);
const randomTen = []
while (randomTen.length<10) randomTen.push(remainingGameFood.splice(Math.floor(Math.random()*remainingGameFood.length),1)[0]);
    return (
      <>
      <select>
        {randomTen.map((item) => (
          <option value={item['Score unique EF (mPt/kg de produit)']}>{item["Nom du Produit en Français"]}</option>
        ))}
      </select>
      <img className="dish" src={this.state.imgDefault}  alt={this.state.imgDefaultAlt}/>
      </>
    );
  }
}