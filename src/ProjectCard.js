import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
    return (
        <div>
            <div className="projectCard--container">
                <div className="projectCard--elements1">
                    <h3 className="projectCard--title">{props.title}</h3>
                    <div className="projectCard--elements2">
                        <img className="projects--image1" alt="" src={props.image}/>
                        <div className="projectCard--description">
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>{"\n"}<br></br></p>
        </div>

    )
}

export default ProjectCard;