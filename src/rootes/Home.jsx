import React from "react";
import "./home.css";
import Presentatoin from "../components/Presentation";
import Hire from "../components/Hire";
import Follow from "../components/Follow";
import Footer from "../components/Footer";
import HomeProjects from "../components/HomeProjects";

function Home({ theme, aboutMeData, projects }) {
  return (
    <div className={`home ${theme}`}>
      <Presentatoin aboutMeData={aboutMeData} />
      <HomeProjects projects={projects} />
      <Hire />
      <Follow />
      <Footer />
    </div>
  );
}

export default Home;
