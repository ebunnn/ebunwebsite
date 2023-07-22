import React from 'react';
import "./Projects.css";
import ProjectCard from './ProjectCard';
import sogrem from "./images/sogremSS.png";


export default function Projects() {
  const sogremDescription = "Sogrem Associates Website represents one of my earliest achievements in\
  web development. Created using ReactJS, this professional platform served the tax service \
  company, \"Sogrem Associates\" providing a them with an online presence."

  return (
    <div>
      <h1 className="projects--title">My Projects!</h1>
      <ProjectCard title="Sogrem Associates Website" image={sogrem} description={sogremDescription} projectLink="www.sogrem.com"/>

      <ProjectCard title="PrepAI" image={sogrem} description="This is a paragraph" projectLink="www.sogrem.com"/>

      <ProjectCard title="Sogrem Associates Website" image={sogrem} description="This is a paragraph" projectLink="www.sogrem.com"/>

      <ProjectCard title="Sogrem Associates Website" image={sogrem} description="This is a paragraph" projectLink="www.sogrem.com"/>

      <ProjectCard title="Sogrem Associates Website" image={sogrem} description="This is a paragraph" projectLink="www.sogrem.com"/>

      {/* <img className="projects--image1" alt="" src={profImage}/> */}
      
    </div>
  );
};

