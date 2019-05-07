import React, { Component } from "react";
import PROJECTS from "./data/projects";

  const Project = ({ project }) =>(
    <div className="center" style={{ display: 'inline-block', margin:'10', padding:'10', width:'300px' }} key={project.id}>
      <h3>{project.title}</h3>
      <div className="center">
        <img src={project.image} link={project.link} alt={project.title} height="120px"/>
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
