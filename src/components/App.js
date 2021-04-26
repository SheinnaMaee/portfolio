import React from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Talk from "./Talk"
import Contact from "./Contact"
import Footer from "./Footer"

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Talk/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App