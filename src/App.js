import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import React from "react";
import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`overscroll-x-none w-screen ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <Sidebar isDarkMode={isDarkMode} />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode}>
        <ProjectCard />
      </Projects>
      <Contacts isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
