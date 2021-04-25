import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Talk from "./components/Talk"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './index.css';

const App = () =>{
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
ReactDOM.render(<App />, document.getElementById('root'));


