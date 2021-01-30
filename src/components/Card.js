import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.value}</p>
        <p>
          Empreinte environnementale : {this.props.result}
        </p>
      </div>
    );
  }
}
 export default Card