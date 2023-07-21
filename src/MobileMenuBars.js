import React from "react";
import "./MobileMenuBars.css"

export default function MobileMenuBars() {
    const [menuBars, setMenuBars] = React.useState(true)
    function handleMenuBars() {
        setMenuBars(prevState => menuBars === true ? !menuBars : menuBars)
    } 
    return (
        <navbar className="navbar--container">
            <h3 className="navbar--logo"><a><Link to="/">Ebun Oludemi</Link></a></h3>
            {/* <h3 className="navbar--logo">Ebun Oludemi</h3> */}
            <div className="navbar--links-div">
                <ul className="navbar--links">
                    <li><a href="https://drive.google.com/file/d/1PBbaCyQ7fthhXzX0sULc2qPQbUZvfY_0/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="https://github.com/ebunnn" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/ebunoluwa-ebun-oludemi-42857b235/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
                <div  className="navbar--menu-bars">
                    <span class="material-symbols-outlined">menu</span>
                </div>
            </div>
        </navbar>
    )
}