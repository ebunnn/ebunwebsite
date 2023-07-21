import React from "react";
import "./Body.css"
import profImage from "./images/Headshot.jpg"
import sogremimg from "./images/sogremSS.png"

export default function Body() {
    return (
        <div className="body--container">
            <div className="body--elements">
                <div className="body--nameAndWelcome">
                    {/* <h2 className="body--name">Ebunoluwa {"("}Ebun{")"} Oludemi</h2> */}
                    <p className="body--welcomeDescription">Welcome to my portfolio website! My name is Ebun Oludemi {"["}pronounced "Eh-boon"{"]"}.
                    I am self-driven and ambitious student with a passion to learn and create new things through coding.
                    </p>
                </div>
                <img className="headshot--image" alt="" src={profImage}/>
            </div>
            <div className="body--projects">
                <h1 className="body--projects-title">Project I am proud of</h1>
                <p><a className="body--sogremProjectLink" href="https://www.sogrem.com" target="_blank" rel="noreferrer"><img className="body--sogremProject" src={sogremimg} alt="Professional Headshot"/></a></p>
                <p className="body--sogremProjectDescription">Sogrem Associates Website<br></br>*Uses ReactJS</p>
            </div>
        </div>
    )
}