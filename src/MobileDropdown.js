import React from "react";
import "./MobileDropdown.css"

export default function MobileDropdown() {
    const [cancelDropdown, setCancelDropdown] = React.useState(false)
    function handleCancelDropdown() {
        setCancelDropdown(prevState => cancelDropdown === false ? cancelDropdown : !cancelDropdown)
    }

    return (
        <navbar className="navbar--mobile-container"> {/*style={{mobileDropdownStyle}} */}
            <div className="navbar--logo-cancel">
                <h3 className="navbar--mobile-logo">Ebunnn Oludemi</h3>
                <span className="material-symbols-outlined">close</span> {/*onClick={{handleCancelDropdown}} */}
            </div>
            {/* <div className="navbar--links-div">
                <ul className="navbar--links">
                    <li><a href="https://drive.google.com/file/d/1PBbaCyQ7fthhXzX0sULc2qPQbUZvfY_0/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="https://github.com/ebunnn" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/ebunoluwa-ebun-oludemi-42857b235/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
                <div className="navbar--menu-bars">
                    <span style={{display:"none"}} class="material-symbols-outlined">menu</span>
                </div> 
    </div> */}
            <div className="navbar--mobile-dropdown">
                    <ul className="navbar--mobile-links">
                        <li><a href="https://drive.google.com/file/d/1PBbaCyQ7fthhXzX0sULc2qPQbUZvfY_0/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                        <li><a href="https://github.com/ebunnn" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/ebunoluwa-ebun-oludemi-42857b235/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
            </div>
        </navbar>
)
}