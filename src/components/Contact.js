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
              href="https://www.facebook.com/sheinna.sartiga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook_logo} alt="facebook logo" />
            </a>
            <a
              href="https://www.instagram.com/sheisinnaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./icons/instagram.png")} alt="insta logo" />
            </a>
            <a
              href="https://github.com/SheinnaMaee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("./icons/github.png")} alt="github logo" />
            </a>
          </div>
        </div>
		
        <p>
          Wondering if I can help, just chat me by linking my icon up? <br />
          
        </p>
		
      </section>
    </div>
  );
};

export default Contact;
