import React from 'react';
import './Identity.css'
import pois from '../data/images/gp-logo.svg'

class Identity extends React.Component {
    render() {
        return(
            <div className='identity'>
                <img src={pois} alt="logo green peas" className="logosite" />
                {/* <div class="titre">
                    <a href="index.html">Green Peas</a>
        </div> */}
            </div>
        )
    }
}

export default Identity