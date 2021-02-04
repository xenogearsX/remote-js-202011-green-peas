import React from 'react'
import { Link } from "react-router-dom";
import '../components/bouton.css'
import '../screen/typo.css';
import '../screen/screen.css';
import earth from '../data/images/earth-2.svg'


const Home = () => {
    return(
        <div id="Page">
                <section className='intro'>
                    <h1>Sauve la planète</h1>
                    <figure className="figure">
                        <img src={earth} alt="earth" />
                        <figcaption></figcaption>
                    </figure>
                    <p>La planète se réchauffe tu as une mission</p>
                    
                    
                    <Link to="/game" className="bouton">Sauve la planète</Link>
                </section>
        </div>
    )
}

export default Home