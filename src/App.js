import React from 'react';
import './App.css';
import Intro from './Components/Intro';
import Logos from './Components/Logos';
import About from './Components/About';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Nav, Navbar } from 'react-bootstrap';
import TL from './images/TL.svg';
import 'animate.css/animate.min.css';

function App() {
  return (
    <div className="App">
      <Navbar
        bg="main"
        variant="light"
        fixed="top"
        expand="sm"
        collapseOnSelect
        className="nav-container"
      >
        <Navbar.Brand>
          <a href="#intro">
            <img src={TL} alt="Logo" id="TL"></img>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#about" id="nav-about">
              ABOUT
            </Nav.Link>
            <Nav.Link href="#projects" id="nav-projects">
              PROJECTS
            </Nav.Link>
            <Nav.Link href="#contact" id="nav-contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr></hr>
      <Intro></Intro>
      <Logos></Logos>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
