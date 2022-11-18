import React from "react";
import "./Body.css"
//import Headshot from './Headshot';
import profImage from "./images/Professional_Pic.jpg"
import sogremimg from "./images/sogremSS.png"

export default function Body() {
    return (
        <div className="body--container">
            <div className="body--elements">
                <div className="body--nameAndWelcome">
                    <h2 className="body--name">Ebunoluwa {"("}Ebun{")"} Oludemi</h2>
                    <p className="body--welcomeDescription">Welcome to my website! My name is Ebun Oludemi {"["}pronounced "Eh-boon"{"]"}.
                    I am self-driven and ambitious student with a passion to learn and create new things through coding.
                    </p>
                </div>
                <img className="headshot--image" alt="" src={profImage}/>
            </div>
            <div className="body--projects">
                <h1 className="body--projects-title">Projects I am proud of</h1>
                <img className="body--sogremProject" src={sogremimg} alt=""/>
            </div>
        </div>
    )
}