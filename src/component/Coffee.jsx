import React from 'react'

import live from '../assets/Live.png';
import github from '../assets/github.png';

import one from "../assets/Coffee/1.png"
import two from "../assets/Coffee/2.png"
import three from "../assets/Coffee/3.png"
import four from "../assets/Coffee/4.png"
import five from "../assets/Coffee/5.png"
import six from "../assets/Coffee/6.png"
import seven from "../assets/Coffee/7.png"
import eight from "../assets/Coffee/8.png"
import nine from "../assets/Coffee/9.png"

export default function Coffee() {
    const handlegitPress = () => {
        window.open("https://github.com/Dinesh-122333/CoffeeApp", "_blank"); // Replace with your GitHub repository URL
      };

    const handlelivePress = () => {
    window.open("https://coffee-app-t2ja.vercel.app/", "_blank"); // Replace with your live link URL
    };
  return (
    <>
    <div className="d-flex justify-content-center">
            <h5 className="main_font">Coffee</h5>
            </div>
    
            <div id="carouselExampleIndicatorsCalculator" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="3" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="4" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="5" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="6" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="7" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide-to="8" aria-label="Slide 3"></button>

            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={one} className="d-block w-75 mx-auto" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                <img src={two} className="d-block w-75 mx-auto" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                <img src={three} className="d-block w-75 mx-auto" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                <img src={four} className="d-block w-75 mx-auto" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                <img src={five} className="d-block w-75 mx-auto" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                <img src={six} className="d-block w-75 mx-auto" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                <img src={seven} className="d-block w-75 mx-auto" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                <img src={eight} className="d-block w-75 mx-auto" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                <img src={nine} className="d-block w-75 mx-auto" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsCalculator" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    
            <div className="d-flex justify-content-center py-5 px-5 para_color">
            <p className="text-center px-3 h5">
                Calculator is a straightforward and user-friendly web application that provides all the basic arithmetic operations you need. 
                Whether you need to add, subtract, multiply, or divide, this calculator has got you covered. 
                Its clean and intuitive interface allows users of all ages to quickly and efficiently handle their mathematical needs.
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
  )
}
