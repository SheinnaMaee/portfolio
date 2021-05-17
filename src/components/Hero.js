import React from "react"

const Hero = () => {
  return (
    <div>
    <section className="hero" id="home">
			<div className="hero-main">
				<h1 className="tracking-in-expand">
					<span className="small-text"
						>Hi, my name is
					</span>
					<br />
					<span className="colored">Md Hussain</span
					><br />
					I Build stuff for the web
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