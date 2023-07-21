import { React, useRef } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const navRef = useRef();
    const responsiveNavClass = "responsive_nav";

    const showNavBar = () => {
        navRef.current.classList.toggle(responsiveNavClass);
    }

    return (
        <navbar className="navbar--container">
            <h3 className="navbar--logo"><a><Link to="/">Ebun Oludemi</Link></a></h3>
            <div className={`navbar--links-div ${responsiveNavClass}`} ref={navRef}>
                <ul className="navbar--links">
                    <li><a href="https://drive.google.com/file/d/1PBbaCyQ7fthhXzX0sULc2qPQbUZvfY_0/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="https://github.com/ebunnn" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://linkedin.com/in/ebun-oludemi" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a><Link to="/Projects">Projects</Link></a></li>
                </ul>
                <button className="navbar--bars navbar--close" onClick={showNavBar}> 
                        <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <button className="navbar--bars" onClick={showNavBar}>
                <FontAwesomeIcon icon={faBars} />
            </button>

        </navbar>
    )
}

