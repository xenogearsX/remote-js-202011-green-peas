import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import './Carousel.css'
import "react-alice-carousel/lib/alice-carousel.css";
import janvier from '../data/images/F&L_de_saisons/Jan-1.jpg'
import février from '../data/images/F&L_de_saisons/Fev-1.jpg'
import mars from '../data/images/F&L_de_saisons/Mar-1.jpg'
import avril from '../data/images/F&L_de_saisons/Avr-1.jpg'
import mai from '../data/images/F&L_de_saisons/Mai-1.jpg'
import juin from '../data/images/F&L_de_saisons/Jun-1.jpg'
import juillet from '../data/images/F&L_de_saisons/Jul-1.jpg'
import aout from '../data/images/F&L_de_saisons/Aug-1.jpg'
import septembre from '../data/images/F&L_de_saisons/Sep-1.jpg'
import octobre from '../data/images/F&L_de_saisons/Oct-1.jpg'
import novembre from '../data/images/F&L_de_saisons/Nov-1.jpg'
import décembre from '../data/images/F&L_de_saisons/Dec-1.jpg'


export default function Carousel () {
    return (
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={janvier} className="sliderimg" alt="" />
                <img src={février} className="sliderimg" alt="" />
                <img src={mars} className="sliderimg" alt="" />
                <img src={avril} className="sliderimg" alt="" />
                <img src={mai} className="sliderimg" alt="" />
                <img src={juin} className="sliderimg" alt="" />
                <img src={juillet} className="sliderimg" alt="" />
                <img src={aout} className="sliderimg" alt="" />
                <img src={septembre} className="sliderimg" alt="" />
                <img src={aout} className="sliderimg" alt="" />
                <img src={septembre} className="sliderimg" alt="" />
                <img src={octobre} className="sliderimg" alt="" />
                <img src={novembre} className="sliderimg" alt="" />
                <img src={décembre} className="sliderimg" alt="" />
            </AliceCarousel>
    )
  }




    // const handleDragStart = (e) => e.preventDefault();

    // const items = [
    //     <img src={janvier} onDragStart={handleDragStart} />,
    //     <img src={février} onDragStart={handleDragStart} />,
    //     <img src={mars} onDragStart={handleDragStart} />,
    //     <img src={avril} onDragStart={handleDragStart} />,
    //     <img src={mai} onDragStart={handleDragStart} />,
    //     <img src={juin} onDragStart={handleDragStart} />,
    //     <img src={juillet} onDragStart={handleDragStart} />,
    //     <img src={aout} onDragStart={handleDragStart} />,
    //     <img src={septembre} onDragStart={handleDragStart} />,
    //     <img src={octobre} onDragStart={handleDragStart} />,
    //     <img src={novembre} onDragStart={handleDragStart} />,
    //     <img src={décembre} onDragStart={handleDragStart} />,
    //   ];
    