import React from "react";
import Hire from "../components/Hire";
import Follow from "../components/Follow";
import Footer from "../components/Footer";
import "./aboutMe.css";

function AboutMe({ theme, aboutMeData }) {
  const { name, body, highlightedBody, body2 } = aboutMeData;
  return (
    <div className={`about ${theme}`}>
      <section className="preset-me">
        <h1> {`It's Me ${name}`}</h1>
        <p>{body}</p>
      </section>
      <section className="more-about">
        <div className="header-more">
          <h3>More About Me</h3>
        </div>
        <div className="body-more">
          <p>{highlightedBody} </p>
          <p>{body2}</p>
        </div>
      </section>
      <Hire />
      <Follow />
      <Footer />
    </div>
  );
}

export default AboutMe;
