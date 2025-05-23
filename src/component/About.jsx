// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import img from "../assets/my_img.jpeg"
// Frontend
import Html from "../assets/Frontend/HTML.png"
import css from "../assets/Frontend/CSS.png"
import bootstrap from "../assets/Frontend/Bootstrap.png"
import js from "../assets/Frontend/JS.png"
import ts from "../assets/Frontend/Typescript.png"
import Reactjs from "../assets/Frontend/React_js.png"
import Reactnative from "../assets/Frontend/React_Native.png"
import jQuery from "../assets/Frontend/jQuery.png"
import angular from "../assets/Frontend/angular.png"

// Backend
import php from "../assets/Backend/php.png"
import express from "../assets/Backend/express.png"
import node from "../assets/Backend/node.png"

// DBs
import mysql from "../assets/Database/mysql.png"
import mongodb from "../assets/Database/mongodb.png"
import redis from "../assets/Database/redis.png"

// Machine Learning
import numpy from "../assets/Machinelearning/numpy.png"
import pandas from "../assets/Machinelearning/pandas.png"
import matplot from "../assets/Machinelearning/matplotlib.jpg"
import deep from "../assets/Machinelearning/deep-learning.png"
import scikit from "../assets/Machinelearning/scikit.png"

// Programming Lang
import python from "../assets/programming_lang/python.png"
import c from "../assets/programming_lang/c.png"

// deployement
import github from "../assets/Deployment/github.png"
import aws from "../assets/Deployment/aws.png"

// tools
import jupyter from "../assets/tools/jupyter.png"
import postman from "../assets/tools/postman.png"
import vscode from "../assets/tools/vscode.png"

import "./styles.css"
import Aos from "aos";

export default function Aboutus() {
  useEffect(() => {
    Aos.init({
      duration: 1600,
    });
  }, []);

  return (
    <>
      <section id="aboutus" className="section">
        <div className="py-5">
          <div id="About" className="container px-5 py-5" data-aos="fade-up">
            <h1 className="d-flex justify-content-center align-items-center pt-5 main_font display-4 primary-color">
              About
            </h1>
            <p className="d-flex justify-content-center text-dark ps-2 pb-5 h3 main_font">
              me
            </p>
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center">
                <div className="image-wrapper">
                  <img
                    id="my_img"
                    className="w-75 ms-4 mb-4 w-md-100 border border-2 border-success rounded"
                    src={img}
                    alt="Dinesh S"
                  />
                </div>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <p className="h4 text-secondary">
                  👋 Hi there! I'm Dinesh S, a passionate and driven individual with a background in Full Stack Development. 
                  I thrive on challenges and am committed to continuous improvement. Currently on a journey to become a versatile software developer 🚀, 
                  I actively learn new technologies and solve daily problems to enhance my skill set. Excited about opportunities to contribute and 
                  grow in the ever-evolving tech landscape. Let's code together and make awesome things happen! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <h1 className="d-flex justify-content-center main_font pt-5 pb-3" data-aos="fade-up">Technologies</h1>

        {/* Frontend */}
        <div className="container my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-center mb-4 main_font primary-color">Frontend</h3>
          <div className="card border-success">
            <div className="card-body">
              <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center">
                <div className="col text-center">
                  <img src={Html} className="img-fluid mb-2" alt="HTML" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">HTML</p>
                </div>
                <div className="col text-center">
                  <img src={css} className="img-fluid mb-2" alt="CSS" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">CSS</p>
                </div>
                <div className="col text-center">
                  <img src={bootstrap} className="img-fluid mb-2" alt="Bootstrap" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Bootstrap</p>
                </div>
                <div className="col text-center">
                  <img src={js} className="img-fluid mb-2" alt="JavaScript" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">JavaScript</p>
                </div>
                <div className="col text-center">
                  <img src={ts} className="img-fluid mb-2" alt="TypeScript" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">TypeScript</p>
                </div>
                <div className="col text-center">
                  <img src={Reactjs} className="img-fluid mb-2" alt="React JS" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">React JS</p>
                </div>
                <div className="col text-center">
                  <img src={Reactnative} className="img-fluid mb-2" alt="React Native" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">React Native</p>
                </div>
                <div className="col text-center">
                  <img src={jQuery} className="img-fluid mb-2" alt="jQuery" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">jQuery</p>
                </div>
                <div className="col text-center">
                  <img src={angular} className="img-fluid mb-2" alt="jQuery" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Angular</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="container my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-center mb-4 main_font primary-color">Backend</h3>
          <div className="card border-success">
            <div className="card-body">
              <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
                <div className="col text-center">
                  <img src={php} className="img-fluid mb-2" alt="PHP" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">PHP</p>
                </div>
                <div className="col text-center">
                  <img src={node} className="img-fluid mb-2" alt="Node.js" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Node.js</p>
                </div>
                <div className="col text-center">
                  <img src={express} className="img-fluid mb-2" alt="Express.js" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Express.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="container my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-center mb-4 main_font primary-color">Database</h3>
          <div className="card border-success">
            <div className="card-body">
              <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
                <div className="col text-center">
                  <img src={mysql} className="img-fluid mb-2" alt="MySQL" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">MySQL</p>
                </div>
                <div className="col text-center">
                  <img src={mongodb} className="img-fluid mb-2" alt="MongoDB" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">MongoDB</p>
                </div>
                <div className="col text-center">
                  <img src={redis} className="img-fluid mb-2" alt="Redis" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Redis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="container my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-center mb-4 main_font primary-color">Machine Learning</h3>
          <div className="card border-success">
            <div className="card-body">
              <div className="row row-cols-2 row-cols-md-5 g-4 justify-content-center">
                <div className="col text-center">
                  <img src={numpy} className="img-fluid mb-2" alt="Numpy" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Numpy</p>
                </div>
                <div className="col text-center">
                  <img src={pandas} className="img-fluid mb-2" alt="Pandas" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Pandas</p>
                </div>
                <div className="col text-center">
                  <img src={matplot} className="img-fluid mb-2" alt="Matplotlib" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Matplotlib</p>
                </div>
                <div className="col text-center">
                  <img src={deep} className="img-fluid mb-2" alt="Deep Learning" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Deep Learning</p>
                </div>
                <div className="col text-center">
                  <img src={scikit} className="img-fluid mb-2" alt="Scikit Learn" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Scikit Learn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="container my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-center mb-4 main_font primary-color">Programming Languages</h3>
          <div className="card border-success">
            <div className="card-body">
              <div className="row row-cols-2 row-cols-md-2 g-4 justify-content-center">
                <div className="col text-center">
                  <img src={python} className="img-fluid mb-2" alt="Python" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Python</p>
                </div>
                <div className="col text-center">
                  <img src={c} className="img-fluid mb-2" alt="C" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">C</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment */}
        <div className="container my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-center mb-4 main_font primary-color">Deployment</h3>
          <div className="card border-success">
            <div className="card-body">
              <div className="row row-cols-2 row-cols-md-2 g-4 justify-content-center">
                <div className="col text-center">
                  <img src={github} className="img-fluid mb-2" alt="Git and GitHub" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Git and GitHub</p>
                </div>
                <div className="col text-center">
                  <img src={aws} className="img-fluid mb-2" alt="AWS" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="container my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-center mb-4 main_font primary-color">Tools</h3>
          <div className="card border-success">
            <div className="card-body">
              <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
                <div className="col text-center">
                  <img src={vscode} className="img-fluid mb-2" alt="VS Code" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">VS Code</p>
                </div>
                <div className="col text-center">
                  <img src={postman} className="img-fluid mb-2" alt="Postman" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Postman</p>
                </div>
                <div className="col text-center">
                  <img src={jupyter} className="img-fluid mb-2" alt="Jupyter Notebook" style={{ width: '50px', height: '50px' }} />
                  <p className="card-title">Jupyter Notebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
