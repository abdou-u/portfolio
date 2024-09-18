import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello and welcome. I am <span className="purple">Ahmed Abdelmalek</span>, currently based in <span className="purple">Lausanne, Switzerland</span>.
            <br />
            <br />
            I am pursuing a Master's degree in Data Science at EPFL with a minor in Cybersecurity, where I am expanding on the technical foundation I built during my Bachelor's degree in Communication Systems, also at EPFL.
            <br />
            <br />
            My interests span across both the theoretical and practical aspects of technology. I thrive in environments where I can leverage data-driven insights to solve real-world problems, blending logic and creativity to drive innovation.
          </p>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "In the vast landscape of technology, where code drives transformation and data reveals opportunity, we discover the solutions that shape the future."
          </p>
          <br />
          <footer className="blockquote-footer">Ahmed Abdelmalek</footer>
          <br />
          <p style={{ textAlign: "justify" }}>
            While coding is central to my skill set, my passion for theory leads me to explore deeper mathematical frameworks such as stochastic processes and Markov chains. These concepts have powerful applications in data science and machine learning, enabling me to unravel complex systems and derive meaningful insights that inform decision-making.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;