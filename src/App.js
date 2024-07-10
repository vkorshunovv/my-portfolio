import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import About from "./components/About/About";
import Education from "./components/Education/Education.js";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts.js";
import Footer from "./components/Footer/Footer.js";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.js";
import ProjectCard from "./components/ProjectCard/ProjectCard.js";

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
