import axios from "axios";
import React from "react";
import Card from "./Card";
import "./Footer.css";

// const sampleFood = [{
//   "total": 1,
//   "value": "Accra de poisson",
//   "results": [
//     {
//       "Utilisation_du_sol_(Pt/kg_de_produit)": 66.195652,
//       "Code_AGB": "25433",
//       "Sous-groupe_d'aliment": "produits à base de poissons et produits de la mer",
//       "Eutrophisation_terreste_(mol_N_eq/kg_de_produit)": 0.39317582,
//       "Formation_photochimique_d'ozone_(E-03_kg_NMVOC_eq/kg_de_produit)": 89.966735,
//       "Code_CIQUAL": 25433,
//       "LCI_Name": "Caribbean-style fish fritters, fish acras",
//       "Acidification_terrestre_et_eaux_douces_(mol_H+_eq/kg_de_produit)": 0.1411699,
//       "Nom_du_Produit_en_Français": "Accra de poisson",
//       "Score_unique_EF_(mPt/kg_de_produit)": 0.90731815,
//       // "Score": 0.90731815,
//       "Matériau_d'emballage": "PS",
//       "Épuisement_des_ressources_minéraux_(E-06_kg_Sb_eq/kg_de_produit)": 9.9669276,
//       "Particules_(E-06_disease_inc_/kg_de_produit)": 0.9793889000000001,
//       "Appauvrissement_de_la_couche_d'ozone_(E-06_kg_CVC11_eq/kg_de_produit)": 1.1321347,
//       "Eutrophisation_marine_(E-03_kg_N_eq/kg_de_produit)": 35.686989000000004,
//       "_i": 7,
//       "Livraison": "Glacé",
//       "Préparation": "Four",
//       "Saisonnalité": "mix de consommation FR",
//       "Épuisement_des_ressources_eau_(m3_depriv_/kg_de_produit)": 2.0887977,
//       "_rand": 118610,
//       "Groupe_d'aliment": "viandes, œufs, poissons",
//       "DQR_-_Note_de_qualité_de_la_donnée_(1_excellente___5_très_faible)": 3.14,
//       "Écotoxicité_pour_écosystèmes_aquatiques_d'eau_douce_(CTUe/kg_de_produit)": 63.205561,
//       "Transport_par_avion_(1___par_avion)": false,
//       "Changement_climatique_(kg_CO2_eq/kg_de_produit)": 5.2542412,
//       "Épuisement_des_ressources_énergétiques_(MJ/kg_de_produit)": 96.609847,
//       "Rayonnements_ionisants_(kBq_U-235_eq/kg_de_produit)": 1.6291217,
//       "Eutrophisation_eaux_douces_(E-03_kg_P_eq/kg_de_produit)": 0.45749028999999997,
//       "_score": null,
//       "_id": "RJYN-3UB5ThAQ3GMBqjU"
//     }
//   ]
// }]
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "Aucune recherche",
      loading: false,
      search: "votre aliment préféré",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.getFood = this.getFood.bind(this);
  }
  // componentDidMount() {
  //   this.getFood();
  // }
  getFood() {
    this.setState({ loading: true }, () => {
      axios
        .get(
          `https://koumoul.com/s/data-fair/api/v1/datasets/agribalyse-synthese/values_agg?field=Nom_du_Produit_en_Fran%C3%A7ais&format=json&agg_size=100&q=${this.state.search}&q_mode=simple&sort=Nom_du_Produit_en_Fran%C3%A7ais&size=100&select=%2A&sampling=neighbors`
        )
        .then((response) => response.data)
        .then((data) => {
          this.setState({
            loading: false,
            food: data.aggs,
          });
        });
    });
  }
  handleSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="footer">
        <div className="search">
          <input
            type="search"
            placeholder="Rechercher un aliment"
            id="search"
            onChange={this.handleSearch}
          />
          <button onClick={this.getFood}>Sauve la planète</button>
          {this.state.food === "Aucune recherche" ? null : <p>Vous recherchez {this.state.search}</p>}

          {this.state.food === "Aucune recherche" ? <div>Aucune recherche lancée</div> :loading ? (
            <div>loading...</div>
          ) : this.state.food.length === 0 ? <div>Désolé, votre recherche n'est pas présent dans notre base de données</div> : (
            <div className='result'>{this.state.food.map((prop) => (
              <Card key= {prop.value} value={prop.value} result={prop.results[0]["Score_unique_EF_(mPt/kg_de_produit)"]} />
            ))}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Footer;
