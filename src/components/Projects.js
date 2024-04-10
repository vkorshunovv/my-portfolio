import "./projects.css";
import React from "react";
import ProjectCard from "./ProjectCard";

import portfolio_dark from "../assets/projects/portfolio_dark.png";
import portfolio_light from "../assets/projects/portfolio_light.png";
import guauleria_v1_img from "../assets/projects/guauleria_v1.png";
import guauleria_v2_img from "../assets/projects/guauleria_v2.png";

export default function Projects({ isDarkMode }) {
  const portfolio = {
    title: "Frontend Developer Portfolio",
    description: `My portfolio website is more than just a digital resume — it's a
dynamic platform where I showcase my creativity, skills, and
projects in web development. With a modern, interactive and
responsive design, website is accessible across devices and
ensures a seamless user experience for anyone interested in
exploring my work and connecting with me.`,
    assets: ["React", "Tailwind", "Netlify"],
    img_light: portfolio_light,
    img_dark: portfolio_dark,
  };

  const guauleria_v1 = {
    title: "Guauleria Web Site (v1)",
    description: `Guauleria is your go-to destination for all things pet-related, offering a comprehensive marketplace and insurance platform tailored to meet the needs of pet owners worldwide. Developed with cutting-edge technology and fully-responsive design, Guauleria ensures that pet owners can access its features seamlessly across all devices.`,
    assets: ["React", "Spring WebFlux", "CSS"],
    img_light: guauleria_v1_img,
    img_dark: guauleria_v1_img,
  };

  const guauleria_v2 = {
    title: "Guauleria Web Site (v2)",
    description: `Guauleria's second iteration builds upon its foundation as the ultimate pet-centric destination. This enhanced version incorporates feedback from pet owners, resulting in a refined user experience. With improved functionality, the site continues to be the go-to choice for pet owners seeking convenience, reliability, and unparalleled service.`,
    assets: ["React", "Spring WebFlux", "CSS"],
    img_light: guauleria_v2_img,
    img_dark: guauleria_v2_img,
  };

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
      <div className="flex flex-col lg:grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-3 space-y-6 lg:space-y-12 pb-28">
        <ProjectCard isDarkMode={isDarkMode} main={portfolio} />
        <ProjectCard isDarkMode={isDarkMode} main={guauleria_v1} />
        <ProjectCard isDarkMode={isDarkMode} main={guauleria_v2} />
      </div>
    </div>
  );
}
