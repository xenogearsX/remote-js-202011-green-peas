import React from 'react';
import FactsList from '../components/FactsList';
import imgEarth from '../data/images/earth.svg'
import './Intro.css';

const Intro = () => {
    return (
        <div className='bgIntro'>
            <div>
                <FactsList />
            </div>
            <div>
                <img src={imgEarth} className='earthAnim'></img>
            </div>
        </div>


    )
}

export default Intro;