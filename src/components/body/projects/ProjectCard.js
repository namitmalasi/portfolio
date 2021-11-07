import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">Demo</div>
            </a>
          )}

          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">Github</div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
