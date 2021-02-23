import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.scss";
import janvier from '../data/images/F&L_de_saisons/janvier.jpg'
import février from '../data/images/F&L_de_saisons/février.jpg'
import mars from '../data/images/F&L_de_saisons/mars.jpg'
import avril from '../data/images/F&L_de_saisons/avril.jpg'
import mai from '../data/images/F&L_de_saisons/mai.jpg'
import juin from '../data/images/F&L_de_saisons/juin.jpg'
import juillet from '../data/images/F&L_de_saisons/juillet.jpg'
import aout from '../data/images/F&L_de_saisons/aout.jpg'
import septembre from '../data/images/F&L_de_saisons/septembre.jpg'
import octobre from '../data/images/F&L_de_saisons/octobre.jpg'
import novembre from '../data/images/F&L_de_saisons/novembre.jpg'
import décembre from '../data/images/F&L_de_saisons/décembre.jpg'


export default function Carousel () {
    
  const test = ()=> {
    let d = new Date();
    return d.getMonth()
  }

  return (

      <div className="carousel">
        <h1>Consommer de saison</h1>
            <AliceCarousel activeIndex={test()} autoPlay autoPlayInterval="4000" infinite>
                <img src={janvier} className="sliderimg" alt="janvier" />
                <img src={février} className="sliderimg" alt="février" />
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
        </div>
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
    