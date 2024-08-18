import { React, useRef } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Navbar.css"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export default function Navbar({user, setUser}) {

    const navRef = useRef();
    const responsiveNavClass = "responsive_nav";

    const showNavBar = () => {
        navRef.current.classList.toggle(responsiveNavClass);
    }

    let navigate = useNavigate();

    function handleSignOut(event) {
        setUser({});
        navigate("/login")
    }


    return (
        <navbar className="flex sticky top-0 bg-[black] w-full h-[70%] left-0 z-[1000] p-3 text-white">
            <h3 className="flex items-center mr-auto relative text-3xl left-5 font-medium"><a><Link to="/">Ebun Oludemi</Link></a></h3>
            <div className={`flex flex-col justify-center ${responsiveNavClass}`} ref={navRef}>
                <ul className="flex list-none absolute right-7 gap-6 text-xl">
                    <li><a href="https://drive.google.com/file/d/1PBbaCyQ7fthhXzX0sULc2qPQbUZvfY_0/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="http s://github.com/ebunnn" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://linkedin.com/in/ebun-oludemi" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="javascript:void(0);"><Link to="/projects">Projects</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/blog">Blog</Link></a></li>
                    <li>{Object.keys(user).length !== 0 ? <a href="javascript:void(0);" onClick={(e) => handleSignOut(e)}>Log Out</a> : <a href="javascript:void(0);"><Link to="/login">Login</Link></a>} </li>
                </ul>
                <button className="navbar--bars navbar--close" onClick={showNavBar}> 
                        <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <button className="navbar--bars" onClick={showNavBar}>
                <FontAwesomeIcon icon={faBars} />
            </button>

        </navbar>
    )
}


