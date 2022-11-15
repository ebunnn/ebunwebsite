import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <navbar className="navbar--container">
            <h3 className="navbar--logo">Ebun Oludemi</h3>
            <div className="navbar--links-div">
                <ul className="navbar--links">
                    <li><a href="file:///Users/ebunoludemi/Downloads/Oludemi,%20Ebun%20Resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="https://github.com/ebunnn" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>

        </navbar>
    )
}