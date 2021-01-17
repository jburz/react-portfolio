import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project"
import EMG from "../assets/images/EMG.png";
import Invitr from "../assets/images/Invitr.png";
import GetchaBurgers from "../assets/images/getchaBurgers.png";
import ReadmeGen from "../assets/images/readmeSample.png";
import FitnessTracker from "../assets/images/fitnessTracker.png";
import EmployeeDir from "../assets/images/employeeDirectory.gif";

const Portfolio = () => {
    const projectsRow1 = [
        {
            imgSrc: EMG,
            title: "Emotional Media Generator",
            text: "Generate photos or gifs based on how you are feeling.",
            github: "https://github.com/MizTangerine/Emotional_Media_Generator",
            deployed: "https://miztangerine.github.io/Emotional_Media_Generator/"
        },
        {
            imgSrc: Invitr,
            title: "Invitr",
            text: "Wedding invitation app used to track guests, their contact info and food preferences.",
            github: "https://github.com/jburz/Invitr",
            deployed: "https://scary-cat-18885.herokuapp.com/"
        },
        {
            imgSrc: GetchaBurgers,
            title: "Getcha Burgers",
            text: "Add burgers you would like to eat. Once eaten, displays in eaten list.",
            github: "https://github.com/jburz/burger-tracker",
            deployed: "https://nameless-reef-29910.herokuapp.com/"
        }
    ];
    const projectsRow2 = [
        {
            imgSrc: ReadmeGen,
            title: "Readme Generator",
            text: "CLI app that will prompt questions and generate a good quality readme based on the responses.",
            github: "https://github.com/jburz/readme-generator",
            deployed: "deployed4"
        },
        {
            imgSrc: FitnessTracker,
            title: "Fitness Tracker",
            text: "A workout app to track cardio and resistance based workout routines.",
            github: "https://github.com/jburz/track-my-workouts",
            deployed: "https://salty-headland-79788.herokuapp.com/"
        },
        {
            imgSrc: EmployeeDir,
            title: "Employee Directory",
            text: "CLI app to track employees, managers departments and salaries.",
            github: "https://github.com/jburz/employee-directory",
            deployed: "deployed6"
        }
    ];

    return (
        <>
            <MyNavbar />
            <Container>
                <Row className="mt-5 mb-4">
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project
                            imgSrc={projectsRow1[0].imgSrc}
                            title={projectsRow1[0].title}
                            text={projectsRow1[0].text}
                            github={projectsRow1[0].github}
                            deployed={projectsRow1[0].deployed}
                        />
                    </Col>
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project
                            imgSrc={projectsRow1[1].imgSrc}
                            title={projectsRow1[1].title}
                            text={projectsRow1[1].text}
                            github={projectsRow1[1].github}
                            deployed={projectsRow1[1].deployed}
                        />
                    </Col>
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project
                            imgSrc={projectsRow1[2].imgSrc}
                            title={projectsRow1[2].title}
                            text={projectsRow1[2].text}
                            github={projectsRow1[2].github}
                            deployed={projectsRow1[2].deployed}
                        />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project
                            imgSrc={projectsRow2[0].imgSrc}
                            title={projectsRow2[0].title}
                            text={projectsRow2[0].text}
                            github={projectsRow2[0].github}
                            deployed={projectsRow2[0].deployed}
                        />
                    </Col>
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project
                            imgSrc={projectsRow2[1].imgSrc}
                            title={projectsRow2[1].title}
                            text={projectsRow2[1].text}
                            github={projectsRow2[1].github}
                            deployed={projectsRow2[1].deployed}
                        />
                    </Col>
                    <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
                        <Project
                            imgSrc={projectsRow2[2].imgSrc}
                            title={projectsRow2[2].title}
                            text={projectsRow2[2].text}
                            github={projectsRow2[2].github}
                            deployed={projectsRow2[2].deployed}
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default Portfolio;