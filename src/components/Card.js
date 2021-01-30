import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p>{prop.value}</p>
        <p>
          Empreinte environnementale :{" "}
          {prop.results[0]["Score_unique_EF_(mPt/kg_de_produit)"]}
        </p>
      </div>
    );
  }
}
 export default Card