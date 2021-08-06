import React from "react";
import facebook_logo from "./icons/facebook.png";
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
	<Fade left cascade>
        <h1>Talk to Me..</h1>
	</Fade>
        <div className="social-media">
          <div className="social-media-icon-container">
            <a
              href="https://www.facebook.com/hussain.akhtar.5661/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook_logo} alt="facebook logo" />
            </a>
            <a
              href="https://www.instagram.com/babyimyourshktiman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./icons/instagram.png")} alt="insta logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-hussain-baa178136/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./icons/linkdlin.png")} alt="linkedln logo" />
            </a>
            <a
              href="https://github.com/HUSS41N"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./icons/github.png")} alt="github logo" />
            </a>
            <a
              href="https://twitter.com/hussainakhtar17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./icons/twitter.png")} alt="twiiter logo" />
            </a>
          </div>
        </div>
		
        <p>
          Wondering if I can help, but not ready for a chat? <br />
          Just drop a line in the form below i'll get back to you.
        </p>
		
        <form
          method="POST"
          action="https://formsubmit.co/hussainakhtar1111@gmail.com"
          encType="multipart/form-data"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <textarea
            name="message"
            id=""
            cols="20"
            rows="10"
            className="message"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit">submit</button>
        </form>
		
      </section>
    </div>
  );
};

export default Contact;
