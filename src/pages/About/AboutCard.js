import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <br />
          <br />
          <br />
            I'm <span className="purple">Ahmed Abdelmalek</span>, a <span className="purple">Data Science Master's student</span> at EPFL with a minor in <span className="purple">Cybersecurity</span>.
            <br />
            <br />
            I thrive at the intersection of theory and practice, applying mathematical frameworks like <span className="purple">stochastic processes</span> and <span className="purple">Markov chains</span> to uncover actionable insights.
          </p>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming data into solutions, one algorithm at a time."
          </p>
          <footer className="blockquote-footer">Ahmed Abdelmalek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;