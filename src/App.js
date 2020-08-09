import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scrollspy from 'react-scrollspy';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="master-container">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current">
        <li><a href="#section-1">section 1</a></li>
        <li><a href="#section-2">section 2</a></li>
        <li><a href="#section-3">section 3</a></li>
      </Scrollspy>
      <h1>jo, U'b Ntoam</h1>
    </div>
  );
}

export default App;
