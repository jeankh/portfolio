import React from "react";
import "./follow.css";
import github from "../../assets/icons8-github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";

function Follow() {
  return (
    <section className="follow">
      <h3>follow me</h3>
      <div className="social-media">
        <a href="https://github.com/jeankh" target="_blank" rel="noreferrer">
          <img src={github} alt="github img" aria-label="github img" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/jean-khoge/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin img" aria-label="linkedin img" />
        </a>
      </div>
    </section>
  );
}

export default Follow;
