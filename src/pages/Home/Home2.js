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
            ABOUT <span className="purple">ME</span>
          </h1>
          <p className="home-about-body">
            I'm a <b className="purple">Data Science and Cybersecurity</b> enthusiast with expertise in <b className="purple">Machine Learning and AI</b>. Proficient in <b className="purple">Python, Go, Java, C/C++, Scala, R, VHDL, and Assembly</b>.
            <br />
            <br />
            Passionate about bridging hardware and software, I've worked on projects ranging from <b className="purple">deep learning models</b> to <b className="purple">low-level programming</b> and <b className="purple">FPGA integration</b>. I'm driven by a commitment to excellence and a love for continuous learning.
            <br />
            <br />
            When I'm not coding, you'll find me staying active through swimming and volleyball.
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