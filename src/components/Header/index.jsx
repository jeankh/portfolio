import React from "react";
import "./header.css";
import home from "../../assets/Mall_home.svg";
import about from "../../assets/about.svg";
import projects from "../../assets/Managing_Projects.svg";
import dark from "../../assets/moon.svg";
import light from "../../assets/light.svg";
import { Link } from "react-router-dom";

function Header({ theme, onChangeTheme, pages }) {
  const themeIcon = {
    light: dark,
    dark: light,
  };

  const icons = {
    Home: home,
    "About me": about,
    "My Projects": projects,
  };
  return (
    <header className={`header ${theme}`}>
      <nav className="nav-bar">
        <div className="main-links">
          {pages.map((page) => {
            return (
              <Link aria-label={page.label} key={page.id} to={page.link}>
                <img
                  src={icons[page.label]}
                  alt={`${page.label} img`}
                  aria-label={`${page.label} img`}
                />
              </Link>
            );
          })}
        </div>
        <button onClick={() => onChangeTheme()}>
          <img
            src={themeIcon[theme]}
            alt={`${theme} img`}
            aria-label={`${theme} img`}
          />
        </button>
      </nav>
    </header>
  );
}

export default Header;
