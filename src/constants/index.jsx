import html5 from "../assets/education/html5.png";
import css3 from "../assets/education/css-3.png";
import js from "../assets/education/js.png";
import reactLogo from "../assets/education/react.png";
import reactDark from "../assets/education/reactDark.png";
import git from "../assets/education/git.png";
import github from "../assets/education/github-light.png";
import githubDark from "../assets/education/github_dark.png";
import figma from "../assets/education/figma.png";
import tailwind from "../assets/education/tailwind.png";
import tailwindDark from "../assets/education/tailwindDark.png";
import bootstrap from "../assets/education/bootstrap-5.png";
import markdown from "../assets/education/markdown.png";
import markdownDark from "../assets/education/markdownDark.png";
import docker from "../assets/education/docker.png";
import docker_dark from "../assets/education/docker_dark.png";
import canva from "../assets/education/canva.png";
import canva_light from "../assets/education/canva_white.png";
import ts from "../assets/education/ts.png";
import ts_dark from "../assets/education/ts-dark.png";
import jest from "../assets/education/jest.png";
import jest_dark from "../assets/education/jest-dark.png";
import node_js from "../assets/education/nodejs.png";
import node_js_dark from "../assets/education/nodejs-dark.png";
import nextjs from "../assets/education/nextjs.png";
import nextjs_dark from "../assets/education/nextjs_dark.png";

import portfolio_dark from "../assets/projects/portfolio_dark.png";
import portfolio_light from "../assets/projects/portfolio_light.png";
import guauleria_v1_img from "../assets/projects/guauleria_v1.png";
import guauleria_v2_img from "../assets/projects/guauleria_landing.png";
import little_lemon_dark from "../assets/projects/little_lemon_dark.png";
import little_lemon_light from "../assets/projects/little_lemon_light.png";
import health_app from "../assets/projects/health_app.png";
import trail_guardians_img from "../assets/projects/trail-guardians.png";

import instagram from "../assets/footer/instagram.png";
import facebook from "../assets/footer/facebook.png";
import telegram from "../assets/footer/telegram.png";
import linkedin from "../assets/footer/linkedin.png";
import github_footer from "../assets/footer/github-light.svg";

export const tools = [
  {
    src_light: reactLogo,
    src_dark: reactDark,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "React",
    id: 1,
  },
  {
    src_light: html5,
    src_dark: html5,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "Html",
    id: 2,
  },
  {
    src_light: css3,
    src_dark: css3,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "Css",
    id: 3,
  },
  {
    src_light: js,
    src_dark: js,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "JavaScript",
    id: 4,
  },

  {
    src_light: bootstrap,
    src_dark: bootstrap,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "Bootstrap",
    id: 5,
  },
  {
    src_light: tailwind,
    src_dark: tailwindDark,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "Tailwind",
    id: 6,
  },
  {
    src_light: github,
    src_dark: githubDark,
    style: "size-16 lg:size-32 reveal blur-right",
    title: "GitHub",
    id: 7,
  },

  {
    src_light: markdown,
    src_dark: markdownDark,
    style: "size-16 lg:size-32 reveal blur-right",
    title: "Markdown",
    id: 8,
  },

  {
    src_light: figma,
    src_dark: figma,
    style: "size-16 lg:size-32 reveal blur-right",
    title: "Figma",
    id: 9,
  },

  {
    src_light: git,
    src_dark: git,
    style: "size-16 lg:size-32 reveal blur-right",
    title: "Git",
    id: 10,
  },

  {
    src_light: canva_light,
    src_dark: canva,
    style: "size-16 lg:size-32 reveal blur-right",
    title: "Canva",
    id: 11,
  },

  {
    src_light: docker,
    src_dark: docker_dark,
    style: "size-16 lg:size-32 reveal blur-right",
    title: "Docker",
    id: 12,
  },

  {
    src_light: jest,
    src_dark: jest_dark,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "Jest",
    id: 13,
  },
  {
    src_light: node_js,
    src_dark: node_js_dark,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "NodeJS",
    id: 14,
  },
  {
    src_light: nextjs,
    src_dark: nextjs_dark,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "NextJS",
    id: 15,
  },
  {
    src_light: ts,
    src_dark: ts_dark,
    style: "size-16 lg:size-32 reveal blur-left",
    title: "TypeScript",
    id: 16,
  },
];

export const portfolio = {
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

export const health_management_app = {
  title: "Health Management App",
  description: `A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, all built using Next.js.`,
  assets: [
    "NextJS",
    "TypeScript",
    "Shadcn/ui",
    {
      title: "GitHub \u2197",
      url: "https://github.com/vkorshunovv/health_management_app",
    },
  ],
  img_light: health_app,
  img_dark: health_app,
  path: "https://carepulseapp.vercel.app/",
};

export const guauleria_v1 = {
  title: "Guauleria Web Application (v1)",
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

export const guauleria_v2 = {
  title: "Guauleria Web Application (v2)",
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

export const trail_guardians = {
  title: "TrailGuardians Web Application",
  description: `TrailGuardians is a community platform that helps people organize and join trail clean-up events. Users can report areas needing attention, create and participate in events, and track their collective impact, all to help keep trails clean and safe.`,
  assets: [
    "TypeScript",
    "Express",
    "PostgreSQL",
    {
      title: "GitHub \u2197",
      url: "https://github.com/vkorshunovv/trail-guardians-frontend",
    },
  ],
  img_light: trail_guardians_img,
  img_dark: trail_guardians_img,
  path: "https://viktorkorshunov.netlify.app",
};

export const little_lemon = {
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

export const links = [
  {
    url: "https://www.instagram.com/vkorshunovv",
    src: instagram,
    title: "Instagram",
    id: 1,
  },
  {
    url: "https://www.facebook.com/victor.korshunow",
    src: facebook,
    title: "Facebook",
    id: 2,
  },
  {
    url: "https://t.me/korshunow",
    src: telegram,
    title: "Telegram",
    id: 3,
  },
  {
    url: "https://www.linkedin.com/in/viktor-korshunow",
    src: linkedin,
    title: "Linkedin",
    id: 4,
  },
  {
    url: "https://github.com/vkorshunovv",
    src: github_footer,
    title: "GitHub",
    id: 5,
  },
];

export const header = [
  { id: 1, name: "Home", path: "#header" },
  { id: 2, name: "About", path: "#about" },
  { id: 3, name: "Education", path: "#education" },
  { id: 4, name: "Projects", path: "#projects" },
  { id: 5, name: "Contacts", path: "#contacts" },
];
