import React from "react";
import img from "../assets/img.jpg"
import './styles.css'

export default function Home(){
    return(
        <>
        <div id ="Home" class="container d-flex justify-content-center align-items-center  ">
        <div id="title" class="text-center">
          <img src={img} class="w-25"/>
          <p class="main_font  display-3 ">
            Hello this is<span class="primary-color"> Dinesh S</span>
          </p>
          <p class="main_font display-6">I'm a software engineer</p>
          <button class="p-3 rounded-pill rbutton">View my works</button>
          {/* <!-- <img class="rounded-circle w-50" src="./Assets/main_img.jpg" alt="Main Image"> --> */}
        </div>
      </div>
        </>
    )
}