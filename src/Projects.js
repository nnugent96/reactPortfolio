import React, { Component } from "react";
import PROJECTS from "./data/projects";

  const Project = ({ project }) =>(
    <div
      style={
        {
          display: 'inline-block',
          margin:'10',
          width:'320px'
        }
      }
      key={project.id}
    >
      <h3>{project.title}</h3>
      <div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={project.image} alt={project.title} height="120px"/>
        </a>
      </div>
      {project.description}
    </div>
  );

class Projects extends Component {
  render() {
    return(
      <div>
        <h2>
          Highlighted Projects
        </h2>
        <div>
          {
            PROJECTS.map( PROJECT => {
              return (
                <Project key={PROJECT.id} project={PROJECT} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Projects;
