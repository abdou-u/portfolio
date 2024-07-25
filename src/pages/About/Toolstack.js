import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { SiLatex, SiArduino, SiLinux, SiOpencv } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="git-tooltip" data-tooltip-content="Git">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="latex-tooltip" data-tooltip-content="LaTeX">
          <SiLatex />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="ros-tooltip" data-tooltip-content="ROS">
          <FaRobot />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="arduino-tooltip" data-tooltip-content="Arduino">
          <SiArduino />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="linux-tooltip" data-tooltip-content="Linux">
          <SiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="opencv-tooltip" data-tooltip-content="OpenCV">
          <SiOpencv />
        </Col>
      </Row>
      <Tooltip id="git-tooltip" className="custom-tooltip" />
      <Tooltip id="latex-tooltip" className="custom-tooltip" />
      <Tooltip id="ros-tooltip" className="custom-tooltip" />
      <Tooltip id="arduino-tooltip" className="custom-tooltip" />
      <Tooltip id="linux-tooltip" className="custom-tooltip" />
      <Tooltip id="opencv-tooltip" className="custom-tooltip" />
    </>
  );
}

export default Toolstack;