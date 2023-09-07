import React from "react";
import "./home.css";
import profilePicture from "../assets/jeanKhoge.jpg";

function Home({ theme, aboutMeData }) {
  return (
    <div className={`home ${theme}`}>
      <header className="presentation">
        <div className="about">
          <h1>{aboutMeData.title}</h1>
          <p>{aboutMeData.describetion}</p>
        </div>
        <img src={profilePicture} alt="profile picture" />
      </header>
      <section className="projects">
        <h2>Prosjects</h2>
      </section>

      <section className="hire">
        <h2>hire me</h2>
      </section>
      <footer className="follow">
        <p>follow me</p>
      </footer>
    </div>
  );
}

export default Home;
