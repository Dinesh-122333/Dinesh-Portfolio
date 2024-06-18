import React from "react";
import send from "../assets/send.png";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    alert("Form submitted!");
  };

  return (
    <>
      <h1 className="d-flex justify-content-center">Contact me</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Name"
            />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>

          <p
            className="border border-2 rounded-pill my-5 ps-5 h5 d-flex align-items-center cursor-pointer"
            onClick={() => document.querySelector('form').dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}))}
            style={{ cursor: "pointer" }}
          >
            send message <img className="w-25 ms-2" src={send} alt="send icon" />
          </p>
        </form>
      </div>
    </>
  );
}

        