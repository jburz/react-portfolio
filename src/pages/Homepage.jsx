import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Headshot from "../assets/images/headshot.jpg"
import "../assets/css/style.css";
import Resume from "../assets/files/Resume.pdf";

const Homepage = () => {
    return (
        <>
            <MyNavbar />
            <Container>
                <Row className="mt-5">
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <img src={Headshot} alt="placeholder image" className="img-fluid img-thumbnail card-border"></img>
                    </Col>
                    <Col sm={8}>
                        <Row className="text-light">
                            <h3>About Me</h3>
                        </Row>
                        <Row className="d-flex text-light justify-content-sm-center">
                            <p>
                                I grew up in the suburbs of Chicago and love everything Chicago related. Give me some
                                italian
                                beef, deep dish pizza and throw a little Cubbies on top.
                            </p>
                            <p>
                                I moved to Logan, UT to attend USU
                                about 11 years ago. I love the area! The access to the mountains and everything outdoors is
                                unbeatable!
                            </p>
                            <p>
                                I love to mountain bike, go on hikes and spend time with my wife and two kids. If I can do
                                it
                                all at once, I have hit the dream!
                        </p>
                        </Row>
                        <Row>
                            <a href={Resume} target="_blank" rel="noferrer" className="btn btn-sm btn-style">View Resume</a>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default Homepage;