import React, { useEffect } from "react";
import './styles.css'
import Aos from "aos";

export default function Companies(){
 useEffect(() =>{
 Aos.init({
 duration: 1600,
 })
 })
 return(
 <>
 <section id="companies" className="section">
 <div id="companies" class="container py-5">
 <div className="" data-aos="fade-up">
 <h1 class="d-flex justify-content-center align-items-center pt-5 main_font h4" >my</h1>
 <h1 class="d-flex justify-content-center align-items-center pb-5 main_font display-4 primary-color" >Work Experience</h1>
 </div>

 <div className="row g-4" data-aos="fade-up">
 <div className="col-md-6">
 <div className="card h-100" style={{backgroundColor: '#f8f9fa'}}>
 <div className="card-body">
 <h5 className="card-title primary-color">Tech Company 1</h5>
 <p className="card-text para_color"><small>Senior Developer | Jan 2022 - Present</small></p>
 <p className="card-text">Built scalable web applications using React and Node.js. Led a team of 5 developers and improved system performance by 40%.</p>
 </div>
 </div>
 </div>
 <div className="col-md-6">
 <div className="card h-100" style={{backgroundColor: '#f8f9fa'}}>
 <div className="card-body">
 <h5 className="card-title primary-color">Tech Company 2</h5>
 <p className="card-text para_color"><small>Full Stack Developer | Jun 2020 - Dec 2021</small></p>
 <p className="card-text">Developed RESTful APIs and frontend interfaces. Collaborated with cross-functional teams to deliver projects on time.</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 
 </>
 )
}
