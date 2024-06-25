import React, { useEffect } from "react";
import send from "../assets/send.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import phone from "../assets/phone.png";
import Aos from "aos";
export default function Contact() {
  function onhandlemailPress(){
    window.location.href = "mailto:dineshsrinivasanr77529@gmail.com";
  }
  function onhandllinkedinPress(){
    window.open("https://www.linkedin.com/in/dinesh-s-a362a8236/")
  }
  function onhandlphonePress(){
    window.location.href = "tel:+91 9361154699"; 
  }
  useEffect(() => {
    Aos.init({
      duration: 1600,
    });
  }, []);
  return (
    <>
      <section id="contact" className="section">
        <div className="" data-aos="fade-up">
        <h1 className="d-flex justify-content-center">Contact me</h1>
        <div className="d-flex justify-content-center m-5">
          <img src={mail} onClick={onhandlemailPress} style={{cursor:"pointer"}} alt="Mail" className="icon-width h-25 mx-3" />
          <img src={linkedin} onClick={onhandllinkedinPress} style={{cursor:"pointer"}}  alt="LinkedIn" className="ms-4 me-3 icon-width h-25" />
          <img src={phone} onClick={onhandlphonePress} style={{cursor:"pointer"}}  alt="Phone" className="mx-3 icon-width h-25" />
        </div>
        </div>
        
      </section>
    </>
  );
}
