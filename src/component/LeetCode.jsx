import React, { useEffect } from "react";
import './styles.css'
import Aos from "aos";

export default function LeetCode(){
 useEffect(() =>{
 Aos.init({
 duration: 1600,
 })
 })
 return(
 <>
 <section id="leetcode" className="section">
 <div id="leetcode" class="container py-5">
 <div className="" data-aos="fade-up">
 <h1 class="d-flex justify-content-center align-items-center pt-5 main_font h4" >my</h1>
 <h1 class="d-flex justify-content-center align-items-center pb-5 main_font display-4 primary-color" >LeetCode Achievements</h1>
 </div>

 <div className="row g-4" data-aos="fade-up">
 <div className="col-md-6">
 <div className="card h-100" style={{backgroundColor: '#f8f9fa'}}>
 <div className="card-body">
 <h5 className="card-title primary-color">Problems Solved</h5>
 <p className="card-text h3 main_font">150+</p>
 <p className="para_color">Solved LeetCode problems across various difficulty levels</p>
 </div>
 </div>
 </div>
 <div className="col-md-6">
 <div className="card h-100" style={{backgroundColor: '#f8f9fa'}}>
 <div className="card-body">
 <h5 className="card-title primary-color">Coding Skills</h5>
 <p className="card-text h3 main_font">Data Structures & Algorithms</p>
 <p className="para_color">Proficient in arrays, linked lists, trees, graphs, and dynamic programming</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 
 </>
 )
}
