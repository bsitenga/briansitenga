import React, { useState, useEffect } from 'react';
import './App.css';
import Scrollspy from 'react-scrollspy';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Typist from 'react-typist';

function App() {
  const [typistReset, setTypistReset] = useState(true);

  useEffect(() => {
    setTypistReset(true);
  }, [typistReset])

  return (
    <div className="master-container">
      {/* Navigation */}
      <Navbar bg="light"  fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="links-div">
            <Scrollspy style={{ display: 'inline-block', paddingInlineStart: '0', margin: '0 auto', }} className="scrollspy" items={['welcome', 'about-me', 'portfolio', 'skills', 'contact']} currentClassName="is-current">
              <Nav.Link href="#welcome">WELCOME</Nav.Link>
              <Nav.Link href="#about-me">ABOUT ME</Nav.Link>
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#skills">SKILLS</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Welcome Hero */}
      <div id="welcome">
        <div className="welcome-info">
          <div className="welcome-text">
            <h1>Hi, I'm Brian</h1>
            <h4>I'm a fullstack developer working with {typistReset ? <Typist avgTypingDelay={65} onTypingDone={() => setTypistReset(false)} >
              <span>React</span>
              <Typist.Backspace count={20} delay={3000} />
              <span>Express</span>
              <Typist.Backspace count={20} delay={3000} />
              <span>MongoDB</span>
              <Typist.Backspace count={20} delay={3000} />
              <span>GraphQL</span>
              <Typist.Backspace count={20} delay={3000} />
              <span>React Native</span>
              <Typist.Backspace count={20} delay={3000} />
              <span>Bootstrap</span>
              <Typist.Backspace count={20} delay={3000} />
              <span>Javascript</span>
              <Typist.Backspace count={20} delay={3000} />
              <span>C++</span>
            </Typist> : ""}</h4>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about-me">
        <h1>jo, U'b Ntoam</h1>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <h1>jo, U'b Ntoam</h1>
      </div>

      {/* Skills Section */}
      <div id="skills">
        <h1>jo, U'b Ntoam</h1>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <h1>jo, U'b Ntoam</h1>
      </div>
    </div >
  );
}

export default App;
