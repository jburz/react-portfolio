import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Footer.css";


const Footer = () => {
    return (
        <>
            <div className="fixed-bottom text">
                <Navbar className="footer" variant="dark" expand="lg">
                    <p>	&#169; 2021</p>
                </Navbar>
            </div>
        </>
    )
}

export default Footer;