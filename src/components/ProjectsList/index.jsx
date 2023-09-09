import React, { useState } from "react";
import "./projectsList.css";
import ProjectCard from "../ProjectCard";
import ProjectDetail from "../ProjectDetail";

function ProjectsList({ projects }) {
  const [project, setProject] = useState({});
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const ToggleShowProjectDetails = () => {
    setShowProjectDetails(!showProjectDetails);
  };
  const OnShowProjectDetails = (project) => {
    setProject(project);
    ToggleShowProjectDetails();
  };
  const OnHideProjectDetails = () => {
    setProject({});
    ToggleShowProjectDetails();
  };
  return (
    <section className="ProjectsList">
      {showProjectDetails ? (
        <ProjectDetail
          project={project}
          OnHideProjectDetails={OnHideProjectDetails}
        />
      ) : (
        <section className="projects-List">
          <section className="title">
            <h2>Side projects</h2>
          </section>

          {projects.map((project, index) => {
            return (
              <ProjectCard
                project={project}
                key={index}
                OnShowProjectDetails={OnShowProjectDetails}
              />
            );
          })}
        </section>
      )}
    </section>
  );
}

export default ProjectsList;
