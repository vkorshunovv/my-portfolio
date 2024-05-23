import { useEffect } from "react";
import me from "../assets/hero/myPhoto.png";
import meLight from "../assets/hero/myPhotoLight.png";
import React from "react";

import "./hero.css";

export default function Hero({ isDarkMode }) {
  useEffect(() => {
    const onPageLoad = () => {
      console.log("page loaded");
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="h-min-screen grid grid-cols-4 lg:grid-cols-12 lg:items-center">
      <div
        id="hero"
        className="col-start-1 col-end-5 lg:col-end-7 lg:space-y-20 ml-5 pt-10 lg:pt-0 pr-3 lg:pr-0 blured-3"
      >
        <h1
          className={`${
            isDarkMode ? "text-slate-100" : "text-slate-800"
          } text-6xl lg:text-9xl font-extrabold`}
        >
          Greetings
          <span
            className={`text-6xl lg:text-9xl ${
              isDarkMode ? "text-red-500" : "text-red-400"
            }`}
          >
            .
          </span>
        </h1>
        <h2
          className={`lg:w-4/6 pt-5 ${
            isDarkMode ? "text-slate-100" : "text-slate-800"
          } text-5xl lg:text-8xl`}
        >
          <div className="flex">I'm a</div>
          <div className="font-extrabold uppercase block">
            {""} front-end{" "}
            <div>
              developer
              <span
                className={`${
                  isDarkMode ? "text-teal-500" : "text-teal-400"
                } text-6xl lg:text-8xl`}
              >
                .
              </span>
            </div>
          </div>
        </h2>
      </div>
      <div className="col-start-1 lg:col-start-7 col-end-5 lg:col-end-12 blured-3">
        <img
          src={isDarkMode ? me : meLight}
          className={`${isDarkMode ? "opacity-75" : "opacity-85"}`}
          alt="My portrait"
        />
      </div>
    </div>
  );
}
