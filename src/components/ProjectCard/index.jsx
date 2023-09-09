import React from "react";
import "./projectCard.css";

import ipView from "../../assets/IPAdTrApp.png";
import rpsView from "../../assets/RPSGame.png";
import arrow from "../../assets/arrow-right-solid.png";

function ProjectCard({ project, OnShowProjectDetails }) {
  const { title, body } = project;
  const pictures = {
    "IP Address Tracker": ipView,
    "Rock, Paper, Scissors Game": rpsView,
  };
  return (
    <section
      className="project-card"
      onClick={() => {
        OnShowProjectDetails(project);
      }}
    >
      <section className="card">
        <div className="project-detail">
          <img
            aria-label={`Image of ${title}`}
            src={pictures[title]}
            alt={title}
            className="project-view"
          />
          <div className="description">
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </div>
        <div className="project-links">
          <a href={project.links[0].url} target="_blank" rel="noreferrer">
            {project.links[0].text}
          </a>
          <a href={project.links[1].url} target="_blank" rel="noreferrer">
            {project.links[1].text}
          </a>
        </div>
      </section>
      <img
        aria-label="arrow img"
        src={arrow}
        alt="arrow img"
        className="arrow"
      />
    </section>
  );
}

export default ProjectCard;
