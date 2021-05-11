import React, { useState } from "react"


const Nav = () => {
  const [isActive, setActive] = useState(false);
  const [scroll, setScroll] = useState(false)
  const ToggleClass = () => {
    setActive(!isActive);
    console.log(isActive)
  };
  const is_scrolling = () => {
    if (window.scrollY > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', is_scrolling)
  return (
    <div>
      <header className="main-head">
        <nav id="main-header" className={`${scroll ? "scrolling-active" : ''} ${isActive ? "nav-background" : ""}`}>
          <h2 className="bounce-in-top"><a href="#home">vgoat.</a></h2>

          <div className={`collapse ${isActive ? "burger-active" : ""}`} >
            <h4 className="bounce-in-top"><a href="#about">About</a></h4>
            <h4 className="bounce-in-top">
              <a href="#projects">Projects</a>
            </h4>
            <h4 className="bounce-in-top">
              <a href="#contact">Contact</a>
            </h4>
            <h4 className="bounce-in-top">
              <a href={require('./docs/mycv.pdf')} target="_blank" rel="noopener noreferrer"> Resume</a>
            </h4>
          </div>
          <div className={`burger ${isActive ? "toggle" : ""}`} onClick={ToggleClass}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav