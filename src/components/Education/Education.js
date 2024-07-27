import knutkit from "../../assets/education/Knutkit.jpeg";
import michigan from "../../assets/education/michigan.png";
import meta from "../../assets/education/meta.jpeg";
import "./education.css";
import { tools } from "../../constants/index";
import React from "react";

export default function Education({ theme }) {
  const darkMode = theme === "dark";

  return (
    <div
      id="education"
      className={`min-h-screen ${darkMode && "bg-slate-950"}`}
    >
      <section className="flex justify-center">
        <div className="m-9 lg:m-20">
          <strong
            className={`${
              darkMode ? "text-slate-100" : "text-slate-800"
            } text-6xl lg:text-8xl `}
          >
            Languages I speak
            <span
              className={`${darkMode ? "text-teal-500" : "text-teal-400"} ml-2`}
            >
              ...
            </span>
          </strong>
        </div>
      </section>
      <section className="flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mt-11 items-center lg:w-8/12">
          {tools.map((tool) => (
            <img
              key={tool.id}
              src={darkMode ? tool.src_light : tool.src_dark}
              className={tool.style}
              alt={tool.title}
            />
          ))}
        </div>
      </section>
      <section className="flex justify-end lg:w-11/12 items-end mt-20 lg:mt-44 ">
        <div
          className={`lg:animate-bounce bg-gradient-to-r ${
            darkMode ? "from-teal-950" : "from-teal-100"
          } rounded-tl-full rounded-bl-full p-5`}
        >
          <em
            className={`text-xl ${
              darkMode ? "text-teal-100" : "text-teal-600"
            } `}
          >
            <span
              className={`${darkMode ? "text-teal-500" : "text-teal-400"} `}
            >
              ...
            </span>
            and there will be more!
          </em>
        </div>
      </section>
      <section className="mt-20 lg:mt-28 pb-10 lg:pb-0 flex flex-col lg:grid grid-cols-4 lg:grid-cols-12 ">
        <div className="col-start-2 col-end-6 flex m-3 lg:m-1 ml-0 reveal fade-left first">
          <div
            className={`bg-gradient-to-l rounded-tr-2xl rounded-br-2xl h-64 shadow-2xl lg:shadow-3xl ${
              darkMode ? "from-emerald-900" : "from-red-400"
            }`}
          >
            <div className="w-full m-1 lg:m-5 px-5 flex flex-col ">
              <div className="px-0 lg:px-5 pt-3 lg:pt-0">
                <img
                  src={knutkit}
                  className="size-16 rounded-xl float-right"
                  alt="Knutkit University"
                />
              </div>
              <div className="px-5 text-pretty">
                <div
                  className={`w-full ${
                    darkMode ? "text-slate-300" : "text-slate-800"
                  } `}
                >
                  <p className="font-normal mb-4">Aug 2011 - Jun 2016</p>
                  <p className="font-semibold mb-1">
                    Kyiv National I. K. Karpenko-Karyi University of Theatre,
                    Cinema and Television
                  </p>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-slate-500" : "text-orange-900"
                    } `}
                  >
                    Theatre and film actor
                  </p>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-zinc-500" : "text-rose-700"
                    } `}
                  >
                    Master's degree
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-6 col-end-9 flex opacity-90 m-3 lg:m-1 ml-0 reveal fade-left second">
          <div
            className={`bg-gradient-to-l rounded-tr-2xl rounded-br-2xl h-64 shadow-2xl lg:shadow-3xl ${
              darkMode ? "from-teal-900" : "from-red-300"
            }`}
          >
            <div className="w-full m-1 lg:m-5 px-5 flex flex-col ">
              <div className="px-0 lg:px-5 pt-3 lg:pt-0">
                <img
                  src={michigan}
                  className="size-16 rounded-xl float-right"
                  alt="University of Michigan"
                />
              </div>
              <div className="px-5 text-balance">
                <div
                  className={`w-full ${
                    darkMode ? "text-slate-300" : "text-slate-800"
                  } `}
                >
                  <p className="font-normal mb-4">Jul 2023 - Sep 2023</p>
                  <p className="font-semibold mb-1">University of Michigan</p>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-slate-500" : "text-orange-900"
                    } `}
                  >
                    Basics of Web Development & Coding
                  </p>
                  <a
                    href="https://coursera.org/share/79bbad2c00ec13c74aee1624d18a0ffa"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`font-medium ${
                      darkMode
                        ? "text-zinc-500 hover:text-teal-500"
                        : "text-rose-700 hover:text-rose-500"
                    } `}
                  >
                    Coursera <span>&#8599;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-9 col-end-12 flex opacity-80 m-3 lg:m-1 ml-0 reveal fade-left third">
          <div
            className={`bg-gradient-to-l rounded-tr-2xl rounded-br-2xl h-64 shadow-2xl lg:shadow-3xl ${
              darkMode ? "from-cyan-900" : "from-red-200"
            }`}
          >
            <div className="w-full m-1 lg:m-5 px-5 flex flex-col ">
              <div className="px-0 lg:px-5 pt-3 lg:pt-0">
                <img
                  src={meta}
                  className="size-16 rounded-xl float-right "
                  alt="Meta"
                />
              </div>
              <div className="px-5 text-balance">
                <div
                  className={`w-full ${
                    darkMode ? "text-slate-300" : "text-slate-800"
                  } `}
                >
                  <p className="font-normal mb-4">Sep 2023 - Dec 2023</p>
                  <p className="font-semibold mb-1">Meta</p>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-slate-500" : "text-orange-900"
                    } `}
                  >
                    Meta Front-End Developer Specialization
                  </p>
                  <a
                    href="https://coursera.org/share/596a9e5e8c8a3804341a021dfa56be2a"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`font-medium ${
                      darkMode
                        ? "text-zinc-500 hover:text-teal-500"
                        : "text-rose-700 hover:text-rose-500"
                    } `}
                  >
                    Coursera <span className="">&#8599;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
