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
import useLocalStorage from "./utils/useLocalStorage.js";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  //new theme functionality

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="overscroll-x-none w-screen bg-gradient" data-theme={theme}>
      <Sidebar  />
      <Header theme={theme} handleToggleTheme={handleToggleTheme}/>
      <Hero  />
      <About  />
      <Education  />
      <Projects >
        <ProjectCard />
      </Projects>
      <Contacts  />
      <Footer  toggleTheme={handleToggleTheme} />
    </div>
  );
}

export default App;
