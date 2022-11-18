import React from "react";
import "./Headshot.css"
import profImage from "./images/Professional_Pic.jpg"

export default function Headshot() {
    return (
        <div>
            <img className="headshot--image" alt="" src={profImage}/>
        </div>
    )
}