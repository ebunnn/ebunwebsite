import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"

export default function Footer() {
    return(
        <footer className="footer--container">
            <p className="footer--copyright">© Ebunoluwa Oludemi</p>
            <div className="footer--social-icons">
                <a href="https://github.com/ebunnn" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="footer--icon" />
                </a>
                <a href="https://linkedin.com/in/ebun-oludemi" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
                </a>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGlobe} className="footer--icon" />
                </a>
            </div>
        </footer>
    )

}