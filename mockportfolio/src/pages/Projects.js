import React from "react";
import ProjectItem from "../components/ProjectItem";
import jobTracker from "../assets/jobTracker.png";
import nasa from "../assets/nasa.png";
import eComm from "../assets/eComm.png";
import photographyWebsite from "../assets/photographyWebsite.png";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Job Tracker" image={jobTracker} />
        <ProjectItem name="Nasa Photo of the day" image={nasa} />
        <ProjectItem
          name="Photography Portfolio Website"
          image={photographyWebsite}
        />
        <ProjectItem name="eCommerce Website" image={eComm} />
      </div>
    </div>
  );
}

export default Projects;
