import { useState, useEffect } from "react";

import "./Header.css";

export default function Header() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

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
      if (window.scrollY > 1000) {
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
      className="grid grid-cols-12 items-center justify-items-end my-5"
    >
      <div className="text-slate-400 text-l font-light col-start-7 col-end-12 blured-2">
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
      </div>
      <button
        onClick={toggleTheme}
        className="container col-start-12 mr-9 blured-2"
        aria-label="Toggle color mode"
        title="Toggle color mode"
      >
        <div className={`sun ${!theme ? "visible" : null}`}></div>
        <div className={`moon ${theme ? "visible" : null}`}>
          <div className="star"></div>
          <div className="star small"></div>
        </div>
      </button>
    </div>
  );
}
