import React from 'react';
import "./Projects.css";
import ProjectCard from './ProjectCard';
import sogrem from "./images/sogremSS.png";


const Projects = () => {
  return (
    <div>
      <h1 className="projects--title">My Projects!</h1>
      <ProjectCard title="Sogrem Associates Website" image={sogrem} description="This is a paragraph"/>

      <ProjectCard title="Sogrem Associates Website" image={sogrem} description="This is a paragraph"/>

      <ProjectCard title="Sogrem Associates Website" image={sogrem} description="This is a paragraph"/>

      <ProjectCard title="Sogrem Associates Website" image={sogrem} description="This is a paragraph"/>

      <ProjectCard title="Sogrem Associates Website" image={sogrem} description="This is a paragraph"/>

      {/* <img className="projects--image1" alt="" src={profImage}/> */}
      
    </div>
  );
};

export default Projects;
