import React from 'react'
import './bouton.css'

const Bouton = (props) => {
    return(
        <a href={props.screen} className="bouton">{props.texte}</a>
    )
}


export default Bouton