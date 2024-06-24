import React, { useEffect } from "react";
import img from "../assets/img.jpg";
import './styles.css';
import Aos from "aos";
import { Link } from "react-scroll";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1600,
    });
  }, []);

  return (
    <>
      <section id="home" className="section">
        <div id="Home" className="container d-flex justify-content-center align-items-center flex-column">
          <div id="title" className="text-center">
            <div className="img-fluid">
              <img src={img} className=" w-25 pt-2 rounded-circle img-mobile" data-aos="fade-up" alt="Profile"/>
            </div>
            
            <p className="main_font display-4" data-aos="fade-up">
              Hello, this is <span className="primary-color">Dinesh S</span>
            </p>
            <p className="main_font h2" data-aos="fade-up">I'm a software developer</p>
            <Link
              to="works"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="p-3 rounded-pill rbutton" data-aos="fade-up">View my works</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
