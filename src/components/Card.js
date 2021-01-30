import React from "react";

class Cards extends React.Component {
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
