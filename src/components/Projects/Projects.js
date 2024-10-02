import "./projects.css";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import {
  portfolio_v2,
  guauleria_v1,
  guauleria_v2,
  little_lemon,
  health_management_app,
  trail_guardians,
  star_land,
} from "../../constants";

export default function Projects({ theme }) {
  const darkMode = theme === "dark";
  return (
    <div
      id="projects"
      className={`min-h-screen ${
        darkMode ? "bg-slate-950 text-slate-100" : "text-slate-800"
      }`}
    >
      <div className="flex justify-center pt-28">
        <div className="mt-10 lg:mt-0 lg:pb-28">
          <strong className="text-6xl lg:text-8xl">My Projects</strong>
        </div>
      </div>
      <div className="flex flex-col lg:grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-4 space-y-6 lg:space-y-12 pb-28">
        <ProjectCard darkMode={darkMode} main={star_land} />
        <ProjectCard darkMode={darkMode} main={trail_guardians} />
        <ProjectCard darkMode={darkMode} main={portfolio_v2} />
        <ProjectCard darkMode={darkMode} main={health_management_app} />
        <ProjectCard darkMode={darkMode} main={guauleria_v1} />
        <ProjectCard darkMode={darkMode} main={guauleria_v2} />
        <ProjectCard darkMode={darkMode} main={little_lemon} />
      </div>
    </div>
  );
}
