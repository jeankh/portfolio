import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./reset.css";
import "./App.css";
import { pages, aboutMeData } from "./data/data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./rootes/Home";
import AboutMe from "./rootes/AboutMe";
import Projects from "./rootes/Projects";
import Contact from "./rootes/Contact";

function App() {
  const [theme, setTheme] = useState("light");
  const onChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} onChangeTheme={onChangeTheme} pages={pages} />
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} aboutMeData={aboutMeData} />}
        />
        <Route path="/about-me" element={<AboutMe theme={theme} />} />
        <Route path="/my-projects" element={<Projects theme={theme} />} />
        <Route path="/contact-me" element={<Contact theme={theme} />} />
      </Routes>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
