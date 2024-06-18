import React from "react";
import covid from "../assets/Covid_Prediction.png"
import './styles.css'
import Profilemaker from "./Profilemaker";
import Photoshopsy from "./Photoshopsy";
import Booksearch from "./Booksearch";
import Feed from "./Feed";
import Calculator from "./Calculator";

export default function Works(){
    return(
        <>
        <div id="work" class="container py-5">
              <h1 class="d-flex justify-content-center align-items-center pt-5 main_font h4" >my</h1>
              <h1 class="d-flex justify-content-center align-items-center pb-5 main_font display-4 primary-color" >Works</h1>
              {/*  Projects  */}
              <Profilemaker/>
              <p className="py-5"></p>
              <Photoshopsy/>
              <p className="py-5"></p>
              <Booksearch/>
              <p className="py-5"></p>
                <Feed/>
              <p className="py-5"></p>
                <Calculator/>
              
        </div>
        </>
    )
}


