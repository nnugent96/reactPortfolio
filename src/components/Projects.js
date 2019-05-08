import React from "react";
import PROJECTS from "../data/projects";

  const Project = ({ project }) =>(
    <div style={{ display: 'inline-block', margin:'20px', width:'30%', minWidth:'300px', verticalAlign:'top'}}>
      <h3>{project.title}</h3>
      <div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} height="120px"/>
        </a>
      </div>
      {project.description}
    </div>
  );

const Projects = () => (
  <div>
    <h2>
      Highlighted Projects
    </h2>
    <div>
      {
        PROJECTS.map( PROJECT => ( <Project key={PROJECT.id} project={PROJECT} />))
      }
    </div>
  </div>
)

export default Projects;
