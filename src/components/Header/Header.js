import { useState, useEffect } from "react";
import React from "react";
import { header } from "../../constants";

import "./header.css";

export default function Header({ isDarkMode, toggleTheme }) {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className="grid grid-cols-4 lg:grid-cols-12 items-center justify-items-end pt-6"
    >
      <nav
        className={`text-l font-light col-start-7 col-end-12 blured-2 hidden lg:flex ${
          isDarkMode ? "text-slate-400" : "darkText"
        } `}
      >
        <ul className={`${small ? "small-1" : ""}`}>
          {header.map((link) => (
            <li
              className={`${small ? "small-2" : ""} ${
                link.name === "Projects" && "text-teal-500"
              }`}
            >
              <a href={link.id}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        className="container lg:col-start-12 mr-9 blured-2"
        aria-label="Toggle color mode"
        title="Toggle color mode"
      >
        <div className={`sun ${!isDarkMode ? "visible" : null} `}></div>
        <div className={`moon ${isDarkMode ? "visible" : null} `}>
          <div className="star"></div>
          <div className="star small"></div>
        </div>
      </button>
    </div>
  );
}
