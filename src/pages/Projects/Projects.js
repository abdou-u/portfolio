import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import slam from "../../Assets/slam.jpeg";
import simulation from "../../Assets/simulation.png";
import snake from "../../Assets/snake.png";
import javelo from "../../Assets/javelo.png";
import radarReport from "../../Assets/Radar_SLAM.pdf";
import infectiousReport from "../../Assets/BA_Final_Project_Report.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slam}
              isBlog={false}
              title="Real-time SLAM"
              description="Simultaneous Localization and Mapping (SLAM) is a method for constructing or updating a map of an unknown environment while simultaneously keeping track of an agent's location within it. This project uses Python and ROS to implement real-time SLAM."
              ghLink="https://github.com/koitu/com304-radar-slam-project"
              reportLink={radarReport}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simulation}
              isBlog={false}
              title="Source Detection of Infectious Diseases"
              description="This project simulates the spread of infectious diseases within a population using mathematical models and Python. The simulation helps in understanding how diseases spread and evaluating the effectiveness of various intervention strategies."
              ghLink="https://github.com/abdou-u/Simulation-and-Source-Detection-of-Infectious-Processes-on-Networks"
              reportLink={infectiousReport}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game in Assembly"
              description="A classic Snake game implemented in Assembly language. This project demonstrates low-level programming skills and an understanding of computer architecture."
              ghLink="https://github.com/abdou-u/Snake-Game-Assembly"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javelo}
              isBlog={false}
              title="Itinerary Planificator for Bikes in Switzerland"
              description="A Java-based project that plans bike itineraries across Switzerland, optimizing for scenic routes and efficiency. This project showcases skills in Java programming and algorithmic problem-solving."
              ghLink="https://github.com/abdou-u/JaVelo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;