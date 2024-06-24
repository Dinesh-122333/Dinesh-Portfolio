import React from "react";
import one from '../assets/Booksearch/one.png';
import two from '../assets/Booksearch/two.png';
import three from '../assets/Booksearch/three.png';
import live from '../assets/Live.png';
import github from '../assets/github.png';

import './styles.css';

export default function Booksearch() {
  const handleLivePress = () => {
    window.open("https://gilded-pudding-4ff928.netlify.app/", "_blank"); // Replace with your live link URL
  };

  const handleGitPress = () => {
    window.open("https://github.com/Dinesh-122333/Book-Search", "_blank"); // Replace with your GitHub repository URL
  };

  const handlePrevClick = () => {
    document.getElementById('carouselExampleIndicatorsBooksearch').carousel('prev'); // Manually trigger carousel to go to previous slide
  };

  const handleNextClick = () => {
    document.getElementById('carouselExampleIndicatorsBooksearch').carousel('next'); // Manually trigger carousel to go to next slide
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h5 className="main_font">Book Search</h5>
      </div>
      
      <div id="carouselExampleIndicatorsBooksearch" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicatorsBooksearch" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicatorsBooksearch" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicatorsBooksearch" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsBooksearch" data-bs-slide="prev" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsBooksearch" data-bs-slide="next" onClick={handleNextClick}>
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-center py-5 px-5 para_color">
        <p className="text-center px-3 h5">
          Booksearch is a powerful web application designed to help users find and manage their favorite books. 
          Users can search for any book and add it to their personal bookshelf for future reference. 
          The responsive interface ensures a seamless experience across both desktop and mobile devices. 
          This combination of search functionality and bookshelf management makes Booksearch an invaluable tool for book enthusiasts.
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <p className="h6 main_font me-4" onClick={handleLivePress} style={{ cursor: 'pointer' }}>
          Live <img src={live} className="icon-width" alt="live" />
        </p>
        <p className="h6 main_font" onClick={handleGitPress} style={{ cursor: 'pointer' }}>
          Code <img src={github} className="icon-width" alt="git" />
        </p>
      </div>
    </>
  );
}
