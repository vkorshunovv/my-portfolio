import "./projects.css";
import React from "react";

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
        <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-12 row-span-1 block lg:flex justify-between items-center pt-20 m-4 lg:m-0 lg:pt-0 space-y-5 lg:space-y-0 ">
          <div
            className={`w-full lg:basis-5/12 bg-gradient-to-l rounded-2xl lg:mr-6 size-24 lg:size-64 reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          >
            <div className="h-full p-4 flex flex-col space-y-2 justify-between">
              <span
                className={`${
                  isDarkMode ? "text-slate-100" : "text-slate-800"
                } text-xl font-medium text-teal-300`}
              >
                Frontend Developer Portfolio
              </span>
              <p
                className={`text-pretty font-normal text-sm leading-normal ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                My portfolio website is more than just a digital resume — it's a
                dynamic platform where I showcase my creativity, skills, and
                projects in web development. With a modern, interactive and
                responsive design, website is accessible across devices and
                ensures a seamless user experience for anyone interested in
                exploring my work and connecting with me.
              </p>
              <div className="flex flex-row space-x-3">
                <div className="bg-teal-400/10 rounded-full ">
                  <p className="px-2 py-1 text-teal-300 text-sm font-medium">React</p>
                </div>
                <div className="bg-teal-400/10 rounded-full ">
                  <p className="px-2 py-1 text-teal-300 text-sm font-medium">Tailwind</p>
                </div>
                <div className="bg-teal-400/10 rounded-full ">
                  <p className="px-2 py-1 text-teal-300 text-sm font-medium">Netlify</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-7/12 lg:ml-6 size-48 lg:size-96 reveal fade-bottom rounded-2xl ">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="size-full"
            >
              <img
                src={isDarkMode ? portfolio_dark : portfolio_light}
                className={`rounded-2xl hover:scale-105 ease duration-300 w-full h-full opacity-80 hover:opacity-100 hover:shadow-2xl ${
                  isDarkMode ? "hover:shadow-teal-950" : ""
                }`}
              />
            </a>
          </div>
        </section>
        {/* <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-12  row-span-1 block lg:flex justify-between items-center pt-20 m-4 lg:m-0 lg:pt-0 space-y-5 lg:space-y-0">
          <div
            className={`w-full lg:basis-5/12 bg-gradient-to-l rounded-2xl lg:mr-6 size-24 lg:size-48  reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          ></div>
          <div
            className={`w-full lg:basis-7/12 bg-gradient-to-r rounded-2xl lg:ml-6 size-48 lg:size-96 flex flex-wrap justify-start  reveal fade-bottom ${
              isDarkMode
                ? "from-emerald-950 to-cyan-950"
                : "from-rose-200 to-red-300"
            }`}
          ></div>
        </section>
        <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-12  row-span-1 block lg:flex justify-between items-center pt-20 m-4 lg:m-0 lg:pt-0 space-y-5 lg:space-y-0 ">
          <div
            className={`w-full lg:basis-5/12 bg-gradient-to-l rounded-2xl lg:mr-6 size-24 lg:size-48  reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          ></div>
          <div
            className={`w-full lg:basis-7/12 bg-gradient-to-r rounded-2xl lg:ml-6 size-48 lg:size-96 flex flex-wrap justify-start  reveal fade-bottom ${
              isDarkMode
                ? "from-emerald-950 to-cyan-950"
                : "from-rose-200 to-red-300"
            }`}
          ></div>
        </section> */}
      </div>
    </div>
  );
}
