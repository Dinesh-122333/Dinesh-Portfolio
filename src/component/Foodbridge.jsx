import React from 'react'
import one from '../assets/Food-bridge/one.png'
import two from '../assets/Food-bridge/two.png';
import three from '../assets/Food-bridge/three.png';
import four from '../assets/Food-bridge/four.png';
import five from '../assets/Food-bridge/five.png';
import six from '../assets/Food-bridge/six.png';
import seven from '../assets/Food-bridge/seven.png';
import eight from '../assets/Food-bridge/eigth.png';

// import live from '../assets/Live.png';
import github from '../assets/github.png';

export default function Foodbridge() {
    
    const handlegitPress = () => {
        window.open("https://github.com/Dinesh-122333/Food-bridge", "_blank"); // Replace with your GitHub repository URL
    };
  return (

    <>
      <div className="d-flex justify-content-center">
        <h5 className="main_font">Food Bridge</h5>
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
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={one} className="d-block w-5 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={two} className="d-block w-5 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-5 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={four} className="d-block w-5 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={five} className="d-block w-5 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={six} className="d-block w-5 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={seven} className="d-block w-5 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={eight} className="d-block w-5 mx-auto" alt="..." />
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
        This project endeavors to tackle the interconnected issues of food waste and hunger prevalent in 
        local communities through the development of a mobile application. The system facilitates the 
        efficient redistribution of surplus food resources by implementing an matching algorithm and 
        proper communication channels. 
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <p className="h6 main_font" onClick={handlegitPress} style={{ cursor: 'pointer' }}>
          Code <img src={github} className="icon-width" alt="git" />
        </p>
      </div>
    </>
  )
}
