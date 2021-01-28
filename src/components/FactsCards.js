import React from "react"; 
import './Facts.css'

class FactCards extends React.Component {
    render() {
        const {props} = this
        return( 
            <div className="bubble thought">
                <div>
                    <img src={props.icon} />
                    <p>{props.texte}</p>
                </div>
            </div>
        )
    }
  }

  export default FactCards