import React, { useState, useEffect } from 'react';
import './App.css';
import Scrollspy from 'react-scrollspy';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Typist from 'react-typist';

function App() {
  const [typistReset, setTypistReset] = useState(true);

  useEffect(() => {
    setTypistReset(true);
  }, [typistReset])

  return (
    <div className="master-container">
      {/* Navigation */}
      <Navbar bg="light" fixed="top">
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
            <h1>Hello, I'm Brian.</h1>
            <h4>I'm a fullstack developer working with {typistReset ? <Typist startDelay={500} avgTypingDelay={65} onTypingDone={() => setTypistReset(false)} >
              <span>React</span>
              <Typist.Backspace count={20} delay={2000} />
              <span>Express</span>
              <Typist.Backspace count={20} delay={2000} />
              <span>MongoDB</span>
              <Typist.Backspace count={20} delay={2000} />
              <span>GraphQL</span>
              <Typist.Backspace count={20} delay={2000} />
              <span>React Native</span>
              <Typist.Backspace count={20} delay={2000} />
              <span>Bootstrap</span>
              <Typist.Backspace count={20} delay={2000} />
              <span>Javascript</span>
              <Typist.Backspace count={20} delay={2000} />
              <span>C++</span>
              <Typist.Backspace count={20} delay={2000} />
            </Typist> : ""}</h4>
          </div>
          <hr></hr>
          <div className="welcome-contact">
            <a className="instagram" href="https://www.instagram.com/brian.sitenga/?hl=en" target="_blank"><i className="fab fa-instagram"></i><p>Instagram</p></a>
            <a className="linkedin" href="https://www.linkedin.com/in/bsitenga/" target="_blank"><i className="fab fa-linkedin-in"></i><p>Linkedin</p></a>
            <a className="github" href="https://github.com/bsitenga" target="_blank"><i className="fab fa-github"></i><p>Github</p></a>
            <a className="facebook" href="https://www.facebook.com/bsitenga" target="_blank"><i className="fab fa-facebook-f"></i><p>Facebook</p></a>
            <a className="email" href="mailto: bsitenga@gmail.com" target="_blank"><i className="far fa-envelope"></i><p>Email</p></a>
          </div>
        </div>
        <div className="scroll-down">
          <i className="fas fa-chevron-down" onClick={() => { window.scrollTo({ top: window.innerHeight / 1.1, left: 0, behavior: 'smooth' }) }}></i>
        </div>
      </div>

      {/* About Section */}
      <div id="about-me">
        <img src="WinterProfilePicCropped.jpg"></img>
        <p className="section-title">ABOUT ME</p>
        <hr className="section-divider"></hr>
        <div className="about-me-text">
          <p>Hi, my name is Brian Sitenga.</p>
          <p>I'm earning my bachelor's of science in computer science and business at the <a style={{ color: "#333" }} href="https://www.usc.edu/" target="_blank">University of Southern California.</a></p>
          <p>I love making interactive websites with the MERN stack and learning more about component-based architecture. I'm also very passionte about the environment, and I'm currently collaborating on a sustainability-focused project here.</p>
          <p>What I'm doing right now: Learning and making hobby projects with Angular</p>
          <a href="/Brian_Sitenga_Resume.pdf" target="_blank"><button style={{ marginTop: '12px' }}>Resumé <i class="far fa-file-alt"></i></button></a>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <p className="section-title" style={{ paddingTop: "35px", marginTop: "0" }}>PORTFOLIO</p>
        <hr className="section-divider"></hr>
        <i style={{ fontSize: '2.5vw', marginBottom: '12px' }} class="far fa-clipboard"></i>
        <h3 style={{ fontSize: '2vw' }}>My Recent Work</h3>
        <p style={{ fontSize: '1.4vw' }}>Here are a few projects I've worked on lately</p>
        <div className="portfolio-items">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="overlay-container">
                  <img src="RowloggerCropped.PNG"></img>
                  <div className="hover-text">
                    <div className="logo">Logo</div>
                    <div className="header">Header</div>
                    <div className="description">Description</div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="overlay-container">
                  <img src="RowloggerCropped.PNG"></img>
                  <div className="hover-text">
                    <div className="logo">Logo</div>
                    <div className="header">Header</div>
                    <div className="description">Description</div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="overlay-container">
                  <img src="CurentCropped.jpg"></img>
                  <div className="hover-text">
                    <div className="logo">Logo</div>
                    <div className="header">Header</div>
                    <div className="description">Description</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <a href="https://github.com/bsitenga" target="_blank"><button style={{ fontSize: "1.75vw" }}>See More <i class="fab fa-github"></i></button></a>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills">
        <p className="section-title" style={{ paddingTop: "35px", marginTop: "0" }}>SKILLS</p>
        <hr className="section-divider"></hr>
        <div className="skills-content">
          <Container>
            <Row>
              <Col lg={4} style={{ padding: "0" }}>
                <Card>
                  <Card.Body style={{ paddingTop: '5vh' }}>
                    <Card.Title style={{ fontSize: "2.75vw", color: "#2026B2" }}><i class="far fa-edit"></i></Card.Title>
                    <Card.Title style={{ fontSize: "2.75vw" }}>Design</Card.Title>
                    <Card.Text>
                      <div className="skills-top">
                        <p className="subtitle">Things I design</p>
                        <p className="subtext">Mobile</p>
                        <p className="subtext">UI/UX</p>
                        <p className="subtext" style={{ marginBottom: ".75rem" }}>Web</p>
                      </div>
                      <div className="skills-bottom">
                        <p className="subtitle">Design Tools</p>
                        <p className="subtext">Pen &amp; Paper</p>
                        <p className="subtext">Photoshop</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} style={{ padding: "0" }}>
                <Card>
                  <Card.Body style={{ paddingTop: '5vh' }}>
                    <Card.Title style={{ fontSize: "2.75vw", color: "#2026B2" }}><i class="far fa-window-maximize"></i></Card.Title>
                    <Card.Title style={{ fontSize: "2.75vw" }}>Frontend</Card.Title>
                    <Card.Text>
                      <div className="skills-top">
                        <p className="subtitle">Languages</p>
                        <p className="subtext">CSS</p>
                        <p className="subtext">HTML</p>
                        <p className="subtext" style={{ marginBottom: ".75rem" }}>JavaScript (ES6)</p>
                      </div>
                      <div className="skills-bottom">
                        <p className="subtitle">Technologies</p>
                        <p className="subtext">Bootstrap</p>
                        <p className="subtext">Flexbox</p>
                        <p className="subtext">jQuery</p>
                        <p className="subtext">React</p>
                        <p className="subtext">React Native</p>
                        <p className="subtext">Redux</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} style={{ padding: "0" }}>
                <Card>
                  <Card.Body style={{ paddingTop: '5vh' }}>
                    <Card.Title style={{ fontSize: "2.75vw", color: "#2026B2" }}><i class="fas fa-terminal"></i></Card.Title>
                    <Card.Title style={{ fontSize: "2.75vw" }}>Backend</Card.Title>
                    <Card.Text>
                      <div className="skills-top">
                        <p className="subtitle">Languages</p>
                        <p className="subtext">C++</p>
                        <p className="subtext" style={{ marginBottom: ".75rem" }}>Java</p>
                      </div>
                      <div className="skills-bottom">
                        <p className="subtitle">Technologies</p>
                        <p className="subtext">Express.js</p>
                        <p className="subtext">GraphQL</p>
                        <p className="subtext">MongoDB</p>
                        <p className="subtext">Node.js</p>
                        <p className="subtext">NPM</p>
                        <p className="subtext">WebSockets</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <p className="section-title" style={{ paddingTop: "35px", marginTop: "0" }}>CONTACT</p>
        <hr className="section-divider"></hr>
        <i style={{ fontSize: '2.5vw', marginBottom: '12px' }} class="far fa-paper-plane"></i>
        <h3 style={{ fontSize: '2vw' }}>Interested in Meeting?</h3>
        <p style={{ fontSize: '1.4vw' }}>Feel free to contact me if you have an interesting project or just want to chat.</p>
        <a href="mailto: bsitenga@gmail.com" target="_blank"><button style={{ fontSize: "1.75vw", marginBottom: '15vw' }}>Message Me! <i class="far fa-comment-alt"></i></button></a>
        <div className="footer">
          <div className="footer-contact">
            <a className="instagram" href="https://www.instagram.com/brian.sitenga/?hl=en" target="_blank"><i class="fab fa-instagram"></i><p>Instagram</p></a>
            <a className="linkedin" href="https://www.linkedin.com/in/bsitenga/" target="_blank"><i class="fab fa-linkedin-in"></i><p>Linkedin</p></a>
            <a className="github" href="https://github.com/bsitenga" target="_blank"><i class="fab fa-github"></i><p>Github</p></a>
            <a className="facebook" href="https://www.facebook.com/bsitenga" target="_blank"><i class="fab fa-facebook-f"></i><p>Facebook</p></a>
            <a className="email" href="mailto: bsitenga@gmail.com" target="_blank"><i class="far fa-envelope"></i><p>Email</p></a>
          </div>
          <p style={{ color: "#999", fontSize: "1.25vw" }}>Made with React, HTML, CSS, and Bootstrap</p>
        </div>
      </div>
    </div >
  );
}

export default App;
