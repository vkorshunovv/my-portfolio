import "./projects.css";
import React from "react";
import ProjectCard from "./ProjectCard";

import portfolio_dark from "../assets/projects/portfolio_dark.png";
import portfolio_light from "../assets/projects/portfolio_light.png";

export default function Projects({ isDarkMode }) {
  return (
    <div
      id="projects"
      className={`min-h-screen ${
        isDarkMode ? "bg-slate-950 text-slate-100" : "text-slate-800"
      }`}
    >
      <div className="flex justify-center">
        <div className="mt-10 lg:mt-0 lg:pb-28">
          <strong className="text-6xl lg:text-8xl">My Projects</strong>
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-3 space-y-6 lg:space-y-12 pb-28">
        <ProjectCard isDarkMode={isDarkMode} img_light={portfolio_light} img_dark={portfolio_dark}/>
        <ProjectCard isDarkMode={isDarkMode} img_light={portfolio_light} img_dark={portfolio_dark}/>
        <ProjectCard isDarkMode={isDarkMode} img_light={portfolio_light} img_dark={portfolio_dark}/>
      </div>
    </div>
  );
}
