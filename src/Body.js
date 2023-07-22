import React from "react";
import "./Body.css"
import profImage from "./images/Headshot.jpg"

export default function Body() {

    // const [displayName, setDisplayName] = React.useState("") 

    // const handleDisplayName = (event) => {
    //     event.preventDefault();
    //     setDisplayName(event.target.elements.name.value);
    //}
    return (
        <div className="body--container">
            <div className="body--elements">
                <div className="body--nameAndWelcome">
                    <h2 className="body--name">Ebunoluwa {"("}Ebun{")"} Oludemi</h2>
                    <p className="body--welcomeDescription">Welcome to my portfolio website! My name is Ebun Oludemi {"["}pronounced "Eh-boon"{"]"}.
                    I am self-driven and ambitious student with a passion to learn and create new things through coding.
                    </p>
                </div>
                <img className="headshot--image" alt="" src={profImage}/>
            </div>
            {/* <form className="body-nameInputContainer" onSubmit={handleDisplayName}>
                <label>
                    Please Enter Your Name:
                    <input type="text" name="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <h1 style={{color: "Black"}}>{{displayName} == "" ? "Hello!" : `Hello ${displayName}!`} </h1> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        
        </div>
    )
}