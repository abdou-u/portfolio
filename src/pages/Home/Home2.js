import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Driven by a passion for continuous learning and a commitment to technology, I have dedicated myself to developing solutions and advancing my knowledge in diverse technical areas.
              <br />
              <br />
              I am proficient in multiple programming languages, including
              <i>
                <b className="purple"> Python, C/C++, Java, Scala, R, VHDL, and Assembly.</b>
              </i>
              <br />
              <br />
              My primary focus areas include developing cutting-edge 
              <i>
                <b className="purple"> Web Technologies</b>
              </i> 
               and exploring the potential of 
              <i>
                <b className="purple"> Machine Learning and AI.</b>
              </i>
              <br />
              <br />
              Outside of my technical work, I enjoy staying active through sports, including swimming, water polo, and volleyball. I believe in maintaining a balanced lifestyle, as reflected in the phrase <i>"mens sana in corpore sano"</i> (a healthy mind in a healthy body).
              <br />
              <br />
              I also have a deep interest in working with hardware, particularly PCBs and other electronic components. The process of bringing hardware and software together, from design to field testing, is a rewarding challenge that I find highly fulfilling.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <br />
            <br />
            <br />
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abdou-u"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-abdelmalek-7b61b91b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;