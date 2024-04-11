import React from "react";
import "./Body.css"
import profPng from "./images/headshot.png"
import {Link} from "react-router-dom";

export default function Body() {
    return (
        <div className="body--container">
            <div className="body--elements">
                <div className="body--words">
                    <h6 className="body--hi">Hi 👋🏾, My name is</h6>
                    <h2 className="body--name">Ebunoluwa Oludemi</h2> 
                    <p className="body--welcomeDescription">Welcome to my portfolio website! My name is Ebun Oludemi {"["}pronounced "Eh-boon"{"]"}.
                            I am self-driven and ambitious student with a passion to learn and create new things through coding.
                    </p>
                    {/* <button className="body--button">View my Projects</button> */}
                    <button class="body--button" role="button"><Link to="/projects">View My Projects</Link></button>
                </div>
                <img className="headshot--image" alt="" loading="lazy" src={profPng}/>
            </div>
            <div>
                <p className="body--space"></p>
            </div>
        
        </div>
    )
}

