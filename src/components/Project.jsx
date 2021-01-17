import React from "react";
import { Card } from "react-bootstrap";
import "../assets/css/style.css";

const Project = (props) => {
    console.log("props: ", props);
    return (
        <Card className="card-border">
            <Card.Img src={props.imgSrc} alt={"placeholder for project"} className="projectImg img-fluid img-thumbnail img-border" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <a href={props.github} className="btn btn-sm btn-style" target="_blank" rel="noferrer">Github</a>
                <a href={props.deployed} className="btn btn-sm btn-style" target="_blank" rel="noferrer">Deployed Site</a>
            </Card.Body>
        </Card>

    )
}

export default Project;