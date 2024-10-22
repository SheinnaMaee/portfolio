import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const Nav = () => {
  const [isActive, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
    console.log(isActive);
  };
  const is_scrolling = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", is_scrolling);
  return (
    <div>
      <header className={`main-head ${scroll ? "scrolling-active" : ""} ${
            isActive ? "nav-background" : ""
          }`}>
        <nav
          id="main-header"
        >
        
            <h2>
            <a href="#home">SHEINNA HOME</a>
            </h2>
          
          <div className={`right collapse ${isActive ? "burger-active" : ""}`}>
            <h4>
              <Fade left cascade>
                <a href="#about">ABOUT</a>
              </Fade>
            </h4>
            <h4>
              <Fade left cascade>
                <a href="#projects">PROJECT</a>
              </Fade>
            </h4>
            <h4>
              <Fade left cascade>
                <a href="#contact">CONTACT</a>
              </Fade>
            </h4>
            <h4>
              <Fade left cascade>
                <a
                  href={require("./docs/mycv.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </Fade>
            </h4>
          </div>
          <div
            className={`burger ${isActive ? "toggle" : ""}`}
            onClick={ToggleClass}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
