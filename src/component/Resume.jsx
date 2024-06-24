import React, { useEffect } from "react";
import Aos, { AOS } from "aos";
const Resume = () => {
  const handleViewClick = () => {
    
    window.open('https://drive.google.com/file/d/13_hspANIsFT264cL7fKn0PIt024glLhh/view?usp=sharing', '_blank');
  };
  useEffect(() =>{
    Aos.init({
      duration:1600,
    })
  })

  return (
    <>
    <section id="resume" className="section">
      <p className="py-5"></p>
    <div className="container py-5" data-aos="fade-up">
      <h1 className="main_font d-flex justify-content-center">Resume</h1>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-outline-success me-3 " onClick={handleViewClick}>
          <h5 className="pt-2">View</h5> 
        </button>
        
      </div>
    </div>
    <p className="py-5"></p>
    </section>
    
    </>
    
  );
};

export default Resume;
