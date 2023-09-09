import React from "react";
import "./projectDetails.css";
import ipView from "../../assets/IPAdTrApp.png";
import rpsView from "../../assets/RPSGame.png";

function ProjectDetail({ project, OnHideProjectDetails }) {
  const { title, body, body1, body2, links } = project;
  const pictures = {
    "IP Address Tracker": ipView,
    "Rock, Paper, Scissors Game": rpsView,
  };
  return (
    <section className="project-details">
      <div className="back-div">
        <button onClick={() => OnHideProjectDetails()}>Back</button>
      </div>
      <section className="details-body">
        <h1>{title}</h1>
        <p>{body}</p>
        <p>{body1}</p>
        <div className="project-links">
          <a href={links[0].url} target="_blank" rel="noreferrer">
            {links[0].text}
          </a>
          <a href={links[1].url} target="_blank" rel="noreferrer">
            {links[1].text}
          </a>
        </div>
      </section>
      <section className="details-extra">
        <img
          aria-label={`Image of ${title}`}
          src={pictures[title]}
          alt={title}
          className="project-view-big"
        />
        <p>{body2}</p>
      </section>
    </section>
  );
}

export default ProjectDetail;
