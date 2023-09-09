import React, { useState } from "react";
import copy from "../../assets/icons8-copy-64.png";
import "./hire.css";

function Hire() {
  const email = "khogejean@gmail.com";
  const [buttonText, setButtonText] = useState("Copy Email");

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setButtonText("Copied!");
        setTimeout(() => {
          setButtonText("Copy Email");
        }, 1500);
      })
      .catch((err) => {
        console.error("Unable to copy email: ", err);
        alert("Error copying email to clipboard.");
      });
  };

  return (
    <section className="hire">
      <h1>Let’s work together.</h1>
      <button onClick={copyEmailToClipboard}>
        <img src={copy} alt="img of copy" /> {buttonText}
      </button>
    </section>
  );
}

export default Hire;
