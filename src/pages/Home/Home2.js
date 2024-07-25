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
              With an unquenchable thirst for knowledge and a deep-seated love for programming, I have immersed myself in the digital world, crafting solutions and exploring new realms of technology.
              <br />
              <br />I am well-versed in a diverse array of languages including
              <i>
                <b className="purple"> Python, C/C++, Java, Scala, R, VHDL, and Assembly.</b>
              </i>
              <br />
              <br />
              My core interests lie in building innovative 
              <i>
                <b className="purple"> Web Technologies and Products</b>
              </i> 
              , and diving deep into 
              <i>
                <b className="purple"> Machine Learning and Artificial Intelligence.</b>
              </i>
              <br />
              <br />
              When I'm not immersed in the digital world, you can find me in the water or on the court. 🏊‍♂️🤽‍♂️🏐 I am a passionate swimmer, water polo player, and volleyball enthusiast. Sports are my second love, right after my devotion to personal projects. As my father always said, <i>"mens sana in corpore sano"</i>, which means a healthy mind in a healthy body. 🧠💪
              <br />
              <br />
              One of the things I enjoy the most is working with PCBs and other hardware. There's something incredibly satisfying about getting my hands dirty and testing hardware in the field after meticulously coding it. The blend of physical and intellectual challenge is exhilarating. 🛠️💻
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