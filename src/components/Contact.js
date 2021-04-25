import React from "react"

const Contact = () => {
  return (
    <div>
    <section className="contact" id="contact">
			<h1>Talk to Me..</h1>
			<div className="social-media">
				<div className="social-media-icon-container">
					<a href="/"><img src="./icons/facebook.png" alt="" /></a>
					<a href="/"><img src="./icons/github.png" alt="" /></a>
					<a href="/"><img src="./icons/linkdlin.png" alt="" /></a>
					<a href="/"><img src="./icons/twitter.png" alt="" /></a>
					<a href="/"><img src="./icons/instagram.png" alt="" /></a>
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
					cols="30"
					rows="10"
					placeholder="Enter Your Message"
				></textarea>
				<button type="submit">submit</button>
			</form>
		</section>
    </div>
  )
}

export default Contact