import React from 'react';
import './App.css';
import Scrollspy from 'react-scrollspy';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="master-container">
      {/* Navigation */}
      
        <Navbar bg="light" expand="sm" fixed="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" id="links-div">
            <Scrollspy style={{ display: 'inline-block', paddingInlineStart: '0', margin: '0 auto', }} className="scrollspy" items={['welcome', 'about-me', 'portfolio', 'skills', 'contact']} currentClassName="is-current">
              <Nav.Link href="#welcome">Welcome</Nav.Link>
              <Nav.Link href="#about-me">About Me</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      

      {/* Welcome Hero */}
      <div id="welcome">
        <h1>jo, U'b Ntoam</h1>
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
