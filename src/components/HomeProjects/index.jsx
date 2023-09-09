import React, { useState } from "react";
import "./homeProjects.css";
import SimpleProjectCard from "../SimpleProjectCard";
import ProjectDetail from "../ProjectDetail";

function HomeProjects({ projects }) {
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
    <section className="HomeProjects">
      {showProjectDetails ? (
        <ProjectDetail
          project={project}
          OnHideProjectDetails={OnHideProjectDetails}
        />
      ) : (
        <section className="projects">
          <div className="porject-header">
            <h2>Side projects</h2>
            <a aria-label="Projects" href="/my-projects">
              View All
            </a>
          </div>
          {projects.map((project, index) => {
            return (
              <SimpleProjectCard
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

export default HomeProjects;
