import React from "react";
import "./Body.css"
import { Helmet } from 'react-helmet';
import profPng from "./images/headshot.png"


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
                    <button class="body--button" role="button">View My Projects</button>
                </div>

                {/* <div className="body--nameAndWelcome">
                    <div className="body--nameAndHi">
                        <h6 className="body--hi">Hi 👋🏾, My name is</h6>
                        <h2 className="body--name">Ebunoluwa Oludemi</h2> 
                    </div>
                    <div className="body--buttonWelcomeContainer">
                        <p className="body--welcomeDescription">Welcome to my portfolio website! My name is Ebun Oludemi {"["}pronounced "Eh-boon"{"]"}.
                        I am self-driven and ambitious student with a passion to learn and create new things through coding.
                        </p>
                        <button className="body--button">View my Projects</button>
                    </div>
                </div> */}
                <img className="headshot--image" alt="" loading="lazy" src={profPng}/>
            </div>
            <div>
                <p className="body--space"></p>
            </div>
            {/* <div className="body--contact">
                <Helmet>
                    <script src="https://static.elfsight.com/platform/platform.js" defer />
                </Helmet>
                <div className="elfsight-app-225e036c-006b-4e86-bf3f-46271e0253dd"></div>
            </div> */}
        
        </div>
    )
    // return (
    //     <div className="body--container">
    //         <div className="body--elements">
    //             <div className="body--nameAndWelcome">
    //                 <h2 className="body--name">Ebunoluwa {"("}Ebun{")"} Oludemi</h2>
    //                 <p className="body--welcomeDescription">Welcome to my portfolio website! My name is Ebun Oludemi {"["}pronounced "Eh-boon"{"]"}.
    //                 I am self-driven and ambitious student with a passion to learn and create new things through coding.
    //                 </p>
    //             </div>
    //             <img className="headshot--image" alt="" loading="lazy" src={profImage}/>
    //         </div>
    //         <div className="body--contact">
    //             <Helmet>
    //                 <script src="https://static.elfsight.com/platform/platform.js" defer />
    //             </Helmet>
    //             <div className="elfsight-app-225e036c-006b-4e86-bf3f-46271e0253dd"></div>
    //         </div>
        
    //     </div>
    // )
}

{/*{"("}Ebun{")"}*/}