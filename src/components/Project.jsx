import React from "react";
import { Card } from "react-bootstrap";
import "../assets/css/style.css";

const Project = () => {
    return (

        <Card className="card-border">
            <Card.Img src="" alt="placeholder for project" className="projectImg img-fluid img-thumbnail img-border" />
            <Card.Body>
                <Card.Title>Placeholder Tiltle</Card.Title>
                <Card.Text>Placeholder Text</Card.Text>
                <a className="btn btn-sm btn-style" target="_blank">Github</a>
                <a className="btn btn-sm btn-style" target="_blank">Deployed Site</a>
            </Card.Body>
        </Card>

    )
}

export default Project;