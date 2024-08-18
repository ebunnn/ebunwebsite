import React from "react";
import "../css/ProjectCard.css";

export default function ProjectCard(props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col shadow-[5px_8px_16px_7px_rgba(0,0,0,0.4)] rounded-md bg-[rgba(57,62,70,0.5)] w-4/5 justify-center items-center m-0">
                <div className="flex flex-col p-8">
                    <h3 className="text-3xl text-[#C4A6D8] text-left font-medium">{props.title}</h3>
                    <div className="flex items-center gap-5">
                        <img className="flex w-2/6 h-2/6 object-cover" alt="" loading="lazy" src={props.image} onClick={props.clickMe}/>
                        <div className="flex text-left flex-1 p-4">
                            <p>{props.description} <a className="text-[#C4A6D8]" href={props.projectLink} target="_blank" rel="noreferrer"><br></br>Link to project</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

