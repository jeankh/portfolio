import React from "react";
import "./simpleProjectCard.css";
import ipView from "../../assets/IPAdTrApp.png";
import rpsView from "../../assets/RPSGame.png";
import arrow from "../../assets/arrow-right-solid.png";

function SimpleProjectCard({ project, OnShowProjectDetails }) {
  const { title, body } = project;
  const pictures = {
    "IP Address Tracker": ipView,
    "Rock, Paper, Scissors Game": rpsView,
  };
  return (
    <div
      className="project"
      onClick={() => {
        OnShowProjectDetails(project);
      }}
    >
      <img
        aria-label={`Image of ${title}`}
        src={pictures[title]}
        alt={title}
        id="project-view"
      />
      <div className="description">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <img aria-label="arrow img" src={arrow} alt="arrow img" id="arrow" />
    </div>
  );
}

export default SimpleProjectCard;
