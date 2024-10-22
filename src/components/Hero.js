import React from "react"
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div>
    <section className="hero" id="home">
			<div className="hero-main">

				<h1>
				<Fade left cascade>
					<span className="small-text"
						>Hi, my name is
					</span>
					<br />
					<span className="colored">Sheinna Mae Sartiga</span>
					<br />
					Information Technology Student
				</Fade>
				</h1>
				
			</div>
	
			<div className="scroll">
				<a href="#about" className="scroll-down">
					<div className="mouse">
						<span></span>
					</div>
					<div className="arrow">
						<span></span>
						<span></span>
					</div>
				</a>
			</div>
		</section>
    </div>
  )
}
export default Hero
