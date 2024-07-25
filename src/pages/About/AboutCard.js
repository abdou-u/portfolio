import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings to all who wander into my digital realm. I am <span className="purple">Ahmed Abdelmalek</span>, hailing from the picturesque city of <span className="purple">Lausanne, Switzerland</span>.
            <br />
            <br />
            Currently, I am delving into the intricate world of Data Science as a Master's student at the prestigious EPFL. My academic journey began with a Bachelor's degree in Communication Systems, also from EPFL, where I laid the foundation of my technical prowess.
            <br />
            <br />
            My passions extend beyond the realm of code. In my quest to balance intellect and creativity, I find solace in pursuits that nourish both mind and soul.
          </p>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "In the vast expanse of digital signals, where code dances like music and innovation flows like fine wine, we find the harmony that connects us all."
          </p>
          <br />
          <footer className="blockquote-footer">Ahmed Abdelmalek</footer>
          <br />
          <p style={{ textAlign: "justify" }}>
            Although programming is my first love, a higher force guides me toward the realm of theory, where the fabric of our existence is woven by probabilities. These unseen threads shape our past, present, and future, steering us through the currents of time. I am captivated by the stochastic processes that govern our universe and the Markov chains that eloquently describe it. Their profound applications reveal the elegant interplay of chance and destiny, a symphony of randomness that touches every aspect of our lives.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;