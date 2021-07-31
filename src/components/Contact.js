import React from "react"
import facebook_logo from "./icons/facebook.png"
const Contact = () => {
  return (
    <div>
    <section className="contact" id="contact">
			<h1>Talk to Me..</h1>
			<div className="social-media">
				<div className="social-media-icon-container">
					<a href="/"><img src={facebook_logo} alt="" /></a>
					<a href="/"><img src={require('./icons/instagram.png')} alt="" /></a>
					<a href="/"><img src={require('./icons/linkdlin.png')} alt="" /></a>
					<a href="/"><img src={require('./icons/github.png')} alt="" /></a>
					<a href="/"><img src={require('./icons/twitter.png')} alt="" /></a>
				</div>
			</div>
			<p>
				Wondering if we can help, but not ready for a chat? <br />
				Just drop us a line in the form bellow we'll get back to you.
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
  )
}

export default Contact
