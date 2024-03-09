import "./projects.css";
import React  from 'react';

export default function Projects({ isDarkMode }) {
  return (
    <div
      id="projects"
      className={`min-h-screen ${
        isDarkMode ? "bg-slate-950 text-slate-100" : "text-slate-800"
      }`}
    >
      <div className="flex justify-center">
        <div className="mt-10 lg:mt-0 lg:m-20">
          <strong className="text-6xl lg:text-8xl">
            My Projects
            <span
              className={`${isDarkMode ? "text-red-500" : "text-red-400"} `}
            >
              *
            </span>
            <br />
            <span className="text-xl justify-center flex text-slate-400 mt-3 blur-sm transition delay-100 duration-300 hover:blur-none hover:cursor-pointer">
              <span
                className={`${isDarkMode ? "text-red-500" : "text-red-400"} `}
              >
                *
              </span>
              currently unavailable
            </span>
          </strong>
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-12 lg:grid-rows-3 space-y-6 lg:space-y-0 pb-36">
        <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-12 row-span-1 block lg:flex justify-between items-center pt-20 m-4 lg:m-0 lg:pt-0 space-y-5 lg:space-y-0 ">
          <div
            className={`w-full lg:basis-5/12 bg-gradient-to-l rounded-2xl lg:mr-6 size-24 lg:size-48 blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          ></div>
          <div
            className={`w-full lg:basis-7/12 bg-gradient-to-r rounded-2xl lg:ml-6 size-48 lg:size-96 flex flex-wrap justify-start blur-2xl  reveal fade-bottom ${
              isDarkMode
                ? "from-emerald-950 to-cyan-950"
                : "from-rose-200 to-red-300"
            }`}
          ></div>
        </section>
        <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-12  row-span-2 block lg:flex justify-between items-center pt-20 m-4 lg:m-0 lg:pt-0 space-y-5 lg:space-y-0">
          <div
            className={`w-full lg:basis-5/12 bg-gradient-to-l rounded-2xl lg:mr-6 size-24 lg:size-48 blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          ></div>
          <div
            className={`w-full lg:basis-7/12 bg-gradient-to-r rounded-2xl lg:ml-6 size-48 lg:size-96 flex flex-wrap justify-start blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-emerald-950 to-cyan-950"
                : "from-rose-200 to-red-300"
            }`}
          ></div>
        </section>
        <section className="col-start-1 lg:col-start-2 col-end-5 lg:col-end-12  row-span-3 block lg:flex justify-between items-center pt-20 m-4 lg:m-0 lg:pt-0 space-y-5 lg:space-y-0 ">
          <div
            className={`w-full lg:basis-5/12 bg-gradient-to-l rounded-2xl lg:mr-6 size-24 lg:size-48 blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-cyan-950 to-emerald-950"
                : "from-red-300 to-rose-200"
            }`}
          ></div>
          <div
            className={`w-full lg:basis-7/12 bg-gradient-to-r rounded-2xl lg:ml-6 size-48 lg:size-96 flex flex-wrap justify-start blur-2xl reveal fade-bottom ${
              isDarkMode
                ? "from-emerald-950 to-cyan-950"
                : "from-rose-200 to-red-300"
            }`}
          ></div>
        </section>
      </div>
    </div>
  );
}
