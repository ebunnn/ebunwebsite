import React from 'react';
import "./Projects.css";
import ProjectCard from './ProjectCard';
import sogrem from "./images/sogremSS.png";
import prepAI from "./images/prepAIimg.png"
import newsSearch from "./images/newsSearchImg.png"
import newsSearch2 from "./images/newsImg.png"
import ebunWeb from "./images/ebunWebImg.png"

export default function Projects() {

  const [newsImg, setnewsImg] = React.useState(true)

  let showNewsImg = newsImg ? newsSearch : newsSearch2
  
  function handleNewsImg() {
    setnewsImg(prevImg => {
      return !prevImg
    }
      )
  }


  const sogremDescription = "Sogrem Associates Website represents one of my earliest achievements in\
  web development. Created using ReactJS, this professional platform served the tax service \
  company, \"Sogrem Associates\" providing them with an online presence."

  const prepAIDescription = "During a hackathon event, our team presented an innovative\
  learning platform named \"PrepAI\", designed to revolutionize the educational experience for\
  students at Buffalo Prep. Utilizing cutting-edge AI programs, PrepAI delivers a highly personalized learning journey,\
  tailored to meet the unique needs and learning styles of each student. Our solution impressed\
  the judges and secured the top position in the Buffalo Prep category."

  const newsAPIDescription = "The News Search website employs the newsapi.com API to enable effortless searches in\
  three categories: Entertainment, Sports, and Technology. Users can input their search query, choose a category,\
  and retrieve the latest articles with titles, authors, images, and descriptions. A click on the image\
  provides a sample of the search results."

  const ebunWebDescription = "My portfolio website, meticulously crafted with ReactJS, serves as an exceptional showcase\
  of my projects, noteworthy achievements, and relevant social media links. Feel free to look around!"

  return (
    <div>
      <h1 className="projects--title">My Projects!</h1>
      <p style={{color: "white"}}>Here are *some* of my projects!</p>
      <ProjectCard title="Sogrem Associates Website" image={sogrem} description={sogremDescription} projectLink="https://sogrem.com"/>

      <ProjectCard title="PrepAI Website" image={prepAI} description={prepAIDescription} projectLink="https://github.com/rdl4199/BuffPrepAI"/>

      <ProjectCard title="API News Search" image={showNewsImg} description={newsAPIDescription} projectLink="https://github.com/ebunnn/news-search-api" clickMe={handleNewsImg}/>

      <ProjectCard title="Ebun Oludemi Portfolio Website" image={ebunWeb} description={ebunWebDescription} projectLink="https://ebunnn.github.io/ebunwebsite/"/>
      
    </div>
  );
};

