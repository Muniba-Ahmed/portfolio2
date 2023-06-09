import React, { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              name={project.name}
              image={project.image}
              onClick={() => handleProjectClick(project)}
            />
          );
        })}

        {
          selectedProject && (
            <div className="modal active" id="modal">
              <div className="modal-header">
                <div className="title">
                  <p>{selectedProject.name}</p>
                  <button
                    className="close-button"
                    onClick={() => setSelectedProject(null)}
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-content">
                Skills: {selectedProject.Skills}
              </div>
            </div>
          )
          // && (
          //   <div className="active" id="overlay">
          //     {" "}
          //   </div>
          // )
        }
      </div>
    </div>
  );
}

export default Projects;
