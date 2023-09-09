import React from "react";
import "./projects.css";
import Hire from "../components/Hire";
import Follow from "../components/Follow";
import Footer from "../components/Footer";
import ProjectsList from "../components/ProjectsList";

function Projects({ theme, projects }) {
  return (
    <div className={`Projects ${theme}`}>
      <ProjectsList projects={projects} />
      <Hire />
      <Follow />
      <Footer />
    </div>
  );
}

export default Projects;
