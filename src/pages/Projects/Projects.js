import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import slam from "../../Assets/slam.jpeg";
import simulation from "../../Assets/simulation.png";
import snake from "../../Assets/snake.png";
import javelo from "../../Assets/javelo.png";
import radarReport from "../../Assets/Radar_SLAM.pdf";
import infectiousReport from "../../Assets/infectiousReport.pdf";
import namecoin from "../../Assets/namecoin.png";
import namecoinReport from "../../Assets/namecoinReport.pdf";
import movie from "../../Assets/movie.png";
import road from "../../Assets/road.png";
import heart from "../../Assets/heart.png";
import roadReport from "../../Assets/roadReport.pdf";
import heartReport from "../../Assets/heartReport.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Cutting-edge solutions at the intersection of data science, cybersecurity, and systems design
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Existing Projects - Refined */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slam}
              title="Real-Time SLAM with Radar"
              description="Built a real-time mapping system using ROS2 and TurtleBot4 IMU. Achieved higher precision than DL-based odometry through point cloud optimization."
              ghLink="https://github.com/abdou-u/Radar-SLAM-Project.git"
              reportLink={radarReport}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simulation}
              title="Epidemic Source Detection"
              description="Investigated infectious disease simulation using grid and graph based models and algorithms and analyzed differential equations to determine key epidemiological metrics."
              ghLink="https://github.com/abdou-u/Simulation-and-Source-Detection-of-Infectious-Processes-on-Networks"
              reportLink={infectiousReport}
            />
          </Col>

          {/* New Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={namecoin}
              title="Decentralized NameCoin System"
              description="Blockchain-based domain management system. Implemented cryptographic proof-of-work and conducted extensive testing (unit, integration, performance) to ensure system correctness, scalability, and security."
              ghLink="https://github.com/cs438-epfl/2024-proj-namecoin-group-25.git"
              reportLink={namecoinReport}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              title="Movie Success Predictor"
              description="Data analysis of 300K+ movie records. Includes interactive data story and predictive models to forecast movie success."
              ghLink="https://github.com/epfl-ada/ada-2024-project-awesometeam2024"
              demoLink="https://epfl-ada.github.io/ada-2024-project-awesometeam2024/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={road}
              title="Satellite Road Segmentation"
              description="Developed and compared state-of-the-art deep learning models (RFE-LinkNet, ResNet, DeepLabV3) for semantic segmentation of roads in satellite imagery."
              ghLink="https://github.com/abdou-u/ML_course/tree/main/projects/ml-project-2-quantum_minds"
              reportLink={roadReport}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              title="Heart Disease Risk Prediction"
              description="ML pipeline for 300K+ medical records. Achieved great results with custom ridge/logistic regression implementations."
              ghLink="https://github.com/abdou-u/ML_course/tree/main/projects/ml-project-1-quantum-minds"
              reportLink={heartReport}
            />
          </Col>

          {/* Existing Hardware Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              title="Assembly Snake Game"
              description="Low-level implementation on Nios II processor. Features collision detection and real-time state saving."
              ghLink="https://github.com/abdou-u/Snake-Game-Assembly"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javelo}
              title="Swiss Bike Route Planner"
              description="JavaFX application with SwissALTI3D elevation data. Real-time route optimization for cyclists."
              ghLink="https://github.com/abdou-u/JaVelo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;