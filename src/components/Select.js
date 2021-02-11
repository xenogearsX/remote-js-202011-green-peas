import React, { Component } from 'react';
import test from "../data/json/csvjson-light.json"
import defaultImgDish from "../data/images/dish.svg"

export default class Select extends Component {
state = {
  imgDefault : defaultImgDish,
  imgDefaultAlt : 'Choisi ton entréé',
  classBt : 'bouton off'
}

  render() {
    return (
      <>
      <select>
        {test.filter(data => data['Catégorie Jeux'].includes(this.props.name)).map((item) => (
          <option value={item['Score unique EF (mPt/kg de produit)']}>{item["Nom du Produit en Français"]}</option>
        ))}
      </select>
      <img className="dish" src={this.state.imgDefault}  alt={this.state.imgDefaultAlt}/>
      </>
    );
  }
}
