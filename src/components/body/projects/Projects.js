import React from "react";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <hr />
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
