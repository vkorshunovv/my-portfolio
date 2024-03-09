import { useState, useEffect } from "react";
import React  from 'react';

import "./header.css";

export default function Header({ isDarkMode, toggleTheme }) {
  useEffect(() => {
    const onPageLoad = () => {};

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

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
          <li className={`${small ? "small-2" : ""}`}>
            <a href="#header">Home</a>
          </li>
          <li className={`${small ? "small-2" : ""}`}>
            <a href="#about">About</a>
          </li>
          <li className={`${small ? "small-2" : ""}`}>
            <a href="#education">Education</a>
          </li>
          <li className={`${small ? "small-2" : ""}`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`${small ? "small-2" : ""}`}>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        className="container lg:col-start-12 mr-9 blured-2"
        aria-label="Toggle color mode"
        title="Toggle color mode"
      >
        <div className={`sun ${!isDarkMode ? "visible" : null} `}></div>
        <div className={`moon ${isDarkMode ? "visible" : null}`}>
          <div className="star"></div>
          <div className="star small"></div>
        </div>
      </button>
    </div>
  );
}
