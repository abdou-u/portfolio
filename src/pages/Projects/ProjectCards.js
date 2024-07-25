import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Report link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.reportLink && (
          <Button
            variant="primary"
            href={props.reportLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiOutlineFilePdf /> &nbsp;
            {"Report"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;