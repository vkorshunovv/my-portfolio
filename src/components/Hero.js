import { useEffect } from "react";
import me from "../assets/hero/myPhoto.png";
import meLight from "../assets/hero/myPhotoLight.png";

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
    <div className="min-h-screen grid grid-cols-12 items-center">
      <div
        id="hero"
        className="col-start-1 col-end-5 space-y-20 ml-5 blured-3 "
      >
        <h1
          className={`${
            isDarkMode ? "text-slate-100" : "text-slate-800"
          } text-9xl mt-22 font-extrabold`}
        >
          Greetings
          <span className={`${isDarkMode ? "text-red-500" : "text-red-400"}`}>
            .
          </span>
        </h1>
        <h2
          className={`${
            isDarkMode ? "text-slate-100" : "text-slate-800"
          } text-8xl`}
        >
          I'm a{" "}
          <span className="font-extrabold uppercase">
            front-end developer
            <span
              className={`${
                isDarkMode ? "text-teal-500" : "text-teal-400"
              } text-9xl`}
            >
              .
            </span>
          </span>
        </h2>
      </div>
      <div className="col-start-7 col-end-12 blured-3">
        <img
          src={isDarkMode ? me : meLight}
          className={`${isDarkMode ? "opacity-75" : "opacity-85"}`}
          alt="My portrait"
        />
      </div>
    </div>
  );
}
