import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project"

const Portfolio = () => {
    return (
        <>
            <MyNavbar />
            <Container>
                <Row className="mt-5 mb-4">
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project />
                    </Col>
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project />
                    </Col>
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project />
                    </Col>
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project />
                    </Col>
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default Portfolio;