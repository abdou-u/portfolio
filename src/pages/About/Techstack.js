import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiJava, DiScala } from "react-icons/di";
import { SiR, SiPostgresql, SiC, SiGo } from "react-icons/si";
import { FaMicrochip, FaToolbox } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="go-tooltip" data-tooltip-content="Go">
          <SiGo />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="python-tooltip" data-tooltip-content="Python">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="cpp-tooltip" data-tooltip-content="C++">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="c-tooltip" data-tooltip-content="C">
          <SiC />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="java-tooltip" data-tooltip-content="Java">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="r-tooltip" data-tooltip-content="R">
          <SiR />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="sql-tooltip" data-tooltip-content="SQL">
          <SiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="scala-tooltip" data-tooltip-content="Scala">
          <DiScala />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="vhdl-tooltip" data-tooltip-content="VHDL">
          <FaToolbox />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="assembly-tooltip" data-tooltip-content="Assembly">
          <FaMicrochip />
        </Col>
      </Row>
      <Tooltip id="go-tooltip" className="custom-tooltip" />
      <Tooltip id="python-tooltip" className="custom-tooltip" />
      <Tooltip id="cpp-tooltip" className="custom-tooltip" />
      <Tooltip id="c-tooltip" className="custom-tooltip" />
      <Tooltip id="java-tooltip" className="custom-tooltip" />
      <Tooltip id="r-tooltip" className="custom-tooltip" />
      <Tooltip id="sql-tooltip" className="custom-tooltip" />
      <Tooltip id="scala-tooltip" className="custom-tooltip" />
      <Tooltip id="vhdl-tooltip" className="custom-tooltip" />
      <Tooltip id="assembly-tooltip" className="custom-tooltip" />
    </>
  );
}

export default Techstack;