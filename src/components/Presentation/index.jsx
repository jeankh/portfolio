import React from "react";
import "./presentation.css";
import profilePicture from "../../assets/jeanKhoge.png";

function Presentatoin({ theme, aboutMeData }) {
  return (
    <header className={`presentation ${theme}`}>
      <div className="pres-about">
        <h1>{aboutMeData.title}</h1>
        <p>{aboutMeData.describetion}</p>
      </div>
      <div className="img">
        <img src={profilePicture} alt="profile" />
      </div>
    </header>
  );
}

export default Presentatoin;
