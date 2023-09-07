import React from "react";
import "./footer.css";
import github from "../../assets/icons8-github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";

function Footer({ theme }) {
  return (
    <footer className={`footer ${theme}`}>
      <div className="social-media-links">
        <button>
          <img src={github} alt="github img" aria-label="github img" />
        </button>
        <button>
          <img src={linkedin} alt="linkedin img" aria-label="linkedin img" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
