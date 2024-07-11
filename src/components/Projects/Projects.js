import "./projects.css";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import portfolio_dark from "../../assets/projects/portfolio_dark.png";
import portfolio_light from "../../assets/projects/portfolio_light.png";
import guauleria_v1_img from "../../assets/projects/guauleria_v1.png";
import guauleria_v2_img from "../../assets/projects/guauleria_landing.png";
import little_lemon_dark from "../../assets/projects/little_lemon_dark.png";
import little_lemon_light from "../../assets/projects/little_lemon_light.png";

export default function Projects({ isDarkMode }) {
  const portfolio = {
    title: "Frontend Developer Portfolio",
    description: `My portfolio website is more than just a digital resume — it's a
      dynamic platform where I showcase my creativity, skills, and
      projects in web development. With a modern, interactive and
      responsive design, website is accessible across devices.`,
    assets: [
      "React",
      "Tailwind",
      {
        title: "GitHub \u2197",
        url: "https://github.com/vkorshunovv/my-portfolio.git",
      },
    ],
    img_light: portfolio_light,
    img_dark: portfolio_dark,
    path: "https://viktorkorshunov.netlify.app",
  };

  const guauleria_v1 = {
    title: "Guauleria Web Site (v1)",
    description: `Guauleria is your go-to destination for all things pet-related, offering a comprehensive marketplace and insurance platform tailored to meet the needs of pet owners worldwide. Developed with cutting-edge technology and fully-responsive design.`,
    assets: [
      "React",
      "CSS",
      {
        title: "GitHub \u2197",
        url: "https://github.com/vkorshunovv/guauleria.git",
      },
    ],
    img_light: guauleria_v1_img,
    img_dark: guauleria_v1_img,
    path: "https://guauleria1.netlify.app",
  };

  const guauleria_v2 = {
    title: "Guauleria Web Site (v2)",
    description: `Guauleria's second iteration builds upon its foundation as the ultimate pet-centric destination. This enhanced version incorporates feedback from pet owners, resulting in a refined user experience. With improved functionality, the site continues to improve.`,
    assets: [
      "React",
      "CSS",
      {
        title: "GitHub \u2197",
        url: "https://github.com/vkorshunovv/guauleria_search_v2.git",
      },
    ],
    img_light: guauleria_v2_img,
    img_dark: guauleria_v2_img,
    path: "https://guauleria.netlify.app",
  };

  const little_lemon = {
    title: "Little Lemon Restaurant",
    description: `Developed as part of the Meta Coursera Capstone Project. Main goals was
    design and style a responsive UI, demonstrate clean and bug free coding, use React components to create multiple views and create a website front-end using React JS and JavaScript`,
    assets: [
      "React",
      "CSS",
      {
        title: "GitHub \u2197",
        url: "https://github.com/vkorshunovv/capstone-little-lemon.git",
      },
    ],
    img_light: little_lemon_light,
    img_dark: little_lemon_dark,
    path: "https://vkorshunovv.github.io/capstone-little-lemon/",
  };

  return (
    <div
      id="projects"
      className={`min-h-screen ${
        isDarkMode ? "bg-slate-950 text-slate-100" : "text-slate-800"
      }`}
    >
      <div className="flex justify-center pt-28">
        <div className="mt-10 lg:mt-0 lg:pb-28">
          <strong className="text-6xl lg:text-8xl">My Projects</strong>
        </div>
      </div>
      <div className="flex flex-col lg:grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-4 space-y-6 lg:space-y-12 pb-28">
        <ProjectCard isDarkMode={isDarkMode} main={portfolio} />
        <ProjectCard isDarkMode={isDarkMode} main={guauleria_v1} />
        <ProjectCard isDarkMode={isDarkMode} main={guauleria_v2} />
        <ProjectCard isDarkMode={isDarkMode} main={little_lemon} />
      </div>
    </div>
  );
}
