import React from "react";

const Resume = () => {
  const handleViewClick = () => {
    
    window.open('https://drive.google.com/file/d/13_hspANIsFT264cL7fKn0PIt024glLhh/view?usp=sharing', '_blank');
  };

  return (
    <>
    <div className="container p">
      <h1 className="main_font d-flex justify-content-center">Resume</h1>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-outline-success me-3 " onClick={handleViewClick}>
          <h5 className="pt-2">View</h5> 
        </button>
        
      </div>
    </div>
    <p className="py-5"></p>
    </>
    
  );
};

export default Resume;
