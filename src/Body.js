import React from "react";
import "./Body.css"
import { Helmet } from 'react-helmet';
// import { ElfsightWidget } from 'react-elfsight-widget';
import profImage from "./images/Headshot.jpg"


export default function Body() {

    // function Component() {
    //     return <ElfsightWidget widgetId="225e036c-006b-4e86-bf3f-46271e0253dd" />;
    //   }
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
            <Helmet>
                <script src="https://static.elfsight.com/platform/platform.js" defer />
            </Helmet>
            <div className="elfsight-app-225e036c-006b-4e86-bf3f-46271e0253dd"></div>
            {/* <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            <div class="elfsight-app-225e036c-006b-4e86-bf3f-46271e0253dd"></div>
            <Helmet>
                <script src="https://your-elfsight-widget-url.com/225e036c-006b-4e86-bf3f-46271e0253dd.js" defer />
            </Helmet> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        
        </div>
    )
}