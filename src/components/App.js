import React from "react"
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"

import Contact from "./Contact"
import Footer from "./Footer"
import SkillsSection from "./SkillsSection"
const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App