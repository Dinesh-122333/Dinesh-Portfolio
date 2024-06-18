import React from "react";
import one from '../assets/Photoshopsy/one.png';
import two from '../assets/Photoshopsy/two.png';
import three from '../assets/Photoshopsy/three.png';
import four from '../assets/Photoshopsy/four.png';
import five from '../assets/Photoshopsy/five.png';
import six from '../assets/Photoshopsy/six.png';
import seven from '../assets/Photoshopsy/seven.png';
import live from '../assets/Live.png';
import github from '../assets/github.png';

import './styles.css';

export default function Photoshopsy() {
  const handlelivePress = () => {
    window.open("https://dinesh-122333.github.io/Photoshopsy/", "_blank");
  };

  const handlegitPress = () => {
    window.open("https://github.com/Dinesh-122333/Photoshopsy", "_blank");
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h5 className="main_font">Photoshopsy</h5>
      </div>
      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={one} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={two} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={four} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={five} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={six} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={seven} className="d-block w-75 mx-auto" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-center py-5 px-5 para_color">
        <p className="text-center px-3 h5">
          Photoshopsy is a photography website that showcases beautiful grids of photos. 
          It also features a testimonials carousel where users can read feedback from others. 
          This combination of stunning visuals and user testimonials provides a comprehensive 
          view of the photography experience offered by Photoshopsy.
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <p className="h6 main_font me-4" onClick={handlelivePress} style={{ cursor: 'pointer' }}>
          Live <img src={live} className="icon-width" alt="live" />
        </p>
        <p className="h6 main_font" onClick={handlegitPress} style={{ cursor: 'pointer' }}>
          Code <img src={github} className="icon-width" alt="git" />
        </p>
      </div>
    </>
  );
}
