import React from "react";
import "../css/Body.css";
import hero from "../images/ebunwebsite hero.png";
import ebunheadshot from "../images/prof headshot.png";
// import ebunheadshot from "../images/Ebun headshot.png";
import { Link } from "react-router-dom";

export default function HomeBody() {
    return (
        <div className="relative w-full h-[100vh]">
            <img src={hero} className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden" alt="Hero Background"/>
            <div className="flex items-center justify-center gap-52">
                <div className="w-3/5 h-full p-32 z-10 flex flex-col min-h-screen items-start justify-center text-left text-white">
                    <h1 className="text-3xl font-bold text-left">Hi 👋🏾, My name is</h1>
                    <h1 className="text-7xl font-bold text-left w-full">Ebunoluwa Oludemi</h1>
                    <p className="text-xl mt-4 text-left">
                    Welcome to my portfolio website! My name is Ebun Oludemi {"["}pronounced "Eh-boon"{"]"}. I am self-driven and ambitious student with a passion to learn and create new things through coding.
                    </p>
                    <button className="mt-8 px-6 py-2 bg-[#C4A6D8] text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
                        View My Projects
                    </button>
                </div>
                <div className="w-2/5 flex justify-end overflow-hidden">
                    <img src={ebunheadshot} className="z-20" alt="Headshot" style={{  height: '100vh',
                        width: '100%', 
                        objectFit: 'contain',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 20%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)', 
                        maskImage: 'linear-gradient(to bottom, black 20%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)' 
                    }}  />
                </div>     
            </div>
        </div>
    );
}
