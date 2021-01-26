import React from 'react';
import './Identity.css'
import pois from '../data/images/pois.webp'

class Identity extends React.Component {
    render() {
        return(
            <div class='identity'>
                <img src={pois} alt="logo green peas" id="logosite" />
                <div id="titre"><a href="index.html">Green Peas</a></div>
            </div>
        )
    }
}

export default Identity