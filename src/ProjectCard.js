import React from "react";
import "./ProjectCard.css";

export default function ProjectCard(props) {
    return (
        <div>
            <div className="projectCard--container">
                <div className="projectCard--elements1">
                    <h3 className="projectCard--title">{props.title}</h3>
                    <div className="projectCard--elements2">
                        <img className="projects--image1" alt="" loading="lazy" src={props.image} onClick={props.clickMe}/>
                        <div className="projectCard--description">
                            <p>{props.description} <a href={props.projectLink} target="_blank" rel="noreferrer"><br></br>Link to project</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <p>{"\n"}<br></br></p>
        </div>

    )
}

