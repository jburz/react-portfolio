import React from "react";
import { Navbar } from "react-bootstrap";
import "../assets/css/style.css";


const Footer = () => {
    return (
        <>
            <div className="fixed-bottom">
                <Navbar className="footer" variant="dark" expand="lg">
                    <div className="text">
                        <p>	&#169;2021 Jake Burzlaff</p>
                    </div>
                </Navbar>
            </div>
        </>
    )
}

export default Footer;