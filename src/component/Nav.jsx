import React from "react";
import { Link } from 'react-scroll';
import './styles.css';

export default function Nav() {
  const onhandlegitPress = () =>{
    window.open("https://github.com/Dinesh-122333?tab=repositories")
  }
  const onhandlelinkedinPress = () => {
    window.open("https://www.linkedin.com/in/dinesh-s-a362a8236/")
  }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand main_font" href="#"><h1 className="primary-color ps-3 py-2">Dinesh</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-4">
                                <Link
                                  className="nav-link"
                                  activeClass="active"
                                  to="home"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  style={{cursor:"pointer"}}
                                >Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link
                                  className="nav-link"
                                  to="works"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  style={{cursor:"pointer"}}
                                >Works</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link
                                  className="nav-link"
                                  to="aboutus"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  style={{cursor:"pointer"}}
                                >About</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link
                                  className="nav-link"
                                  to="resume"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  style={{cursor:"pointer"}}
                                >Resume</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link
                                  className="nav-link"
                                  to="contact"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  style={{cursor:"pointer"}}
                                >Contact</Link>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" onClick={onhandlegitPress} href="#">Github</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" onClick={onhandlelinkedinPress} href="#">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
