import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
            <MyNavbar />
            <Container>
                <Row className="mt-5 text-light">
                    <h1>Contact Info</h1>
                </Row>
                <Row className="text-light">
                    <p>
                        Find me on social media!
                    </p>
                </Row>
                <Row>
                    <Col sm={2} className="d-flex justify-content-center">
                        <i className="fab fa-linkedin icon"></i>
                        <a href="https://www.linkedin.com/in/jake-burzlaff-4b03a0b5/" target="_blank" rel="noreferrer" className="text">LinkedIn</a>
                    </Col>
                    <Col sm={2} className="d-flex justify-content-center">
                        <i className="fab fa-github icon"></i>
                        <a href="https://www.linkedin.com/in/jake-burzlaff-4b03a0b5/" target="_blank" rel="noreferrer" className="text">GitHub</a>
                    </Col>
                    <Col sm={3} className="d-flex justify-content-center">
                        <i className="fas fa-phone icon"></i>
                        <a href="https://www.linkedin.com/in/jake-burzlaff-4b03a0b5/" target="_blank" rel="noreferrer" className="text">(630) 809-8335</a>
                    </Col>
                    <Col sm={3} className="d-flex justify-content-center">
                        <i className="fas fa-envelope icon"></i>
                        <a href="https://www.linkedin.com/in/jake-burzlaff-4b03a0b5/" target="_blank" rel="noreferrer" className="text">jake.bilbao.04.06@gmail.com</a>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default Contact;