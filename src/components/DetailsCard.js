import React from "react";
import "./DetailsCard.scss";

class DetailCard extends React.Component {
  render() {
    return (
      <div className="carddetail">
        <p className="titreCard">{this.props.value}</p>
        <p>
        Empreinte environnementale<span> :</span><br />{this.props.ef}
        </p>
        <p>
        Changement climatique<span> :</span><br />{this.props.changeclim}
        </p>
        <p>
        Appauvrissement de la couche d'ozone<span> :</span><br />{this.props.appozone}
        </p>
        <p>
        Rayonnements ionisants<span> :</span><br />{this.props.rayion}
        </p>
        <p>
        Formation photochimique d'ozone<span> :</span><br />{this.props.formozone}
        </p>
        <p>
        Particules<span> :</span><br />{this.props.part}
        </p>
        <p>
        Acidification terrestre et eaux douces<span> :</span><br />{this.props.acid}
        </p>
        <p>
        Eutrophisation terrestre<span> :</span><br />{this.props.eut}
        </p>
        <p>
        Eutrophisation eaux douces<span> :</span><br />{this.props.eue}
        </p>
        <p>
        Eutrophisation marine<span> :</span><br />{this.props.eum}
        </p>
        <p>
        Utilisation du sol<span> :</span><br />{this.props.sol}
        </p>
        <p>
        Écotoxicité pour écosystèmes aquatiques d'eau douce<span> :</span><br />{this.props.eco}
        </p>
        <p>
        Épuisement des ressources eau<span> :</span><br />{this.props.ee}
        </p>
        <p>
        Épuisement des ressources énergétiques<span> :</span><br />{this.props.een}
        </p>
        <p>
        Épuisement des ressources minérales<span> :</span><br />{this.props.em}
        </p>
        {this.props.ef < 1 ? <p className="pea">🟢</p> : this.props.ef < 4 ? <p className="pea">🟡</p> : <p className="pea">🔴</p>}
      </div>
    );
  }
}
 export default DetailCard