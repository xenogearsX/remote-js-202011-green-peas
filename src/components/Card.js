import React from "react";
import './Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.value}</p>
        <p>
          Pois environnementale :
        </p>
        {this.props.result < 1 ? <p>🟢 🟢 🟢</p> : this.props.result < 4 ? <p>🟡 🟡</p> : <p>🔴 🔴 🔴</p>}
      </div>
    );
  }
}
 export default Card