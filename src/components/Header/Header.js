import { useState, useEffect } from "react";
import React from "react";
import { header } from "../../constants";
import "./header.css";

export default function Header({ theme, handleToggleTheme }) {
  const [verticalNav, setVerticalNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setVerticalNav(true);
      } else {
        setVerticalNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getClassNames = (link) => {
    const baseClass = `${verticalNav && "vert-nav"} `;

    const projectClass = `${
      link.name === "Projects" && "nav-project-color font-medium"
    }`;
    return `${baseClass} ${projectClass}`;
  };

  return (
    <div
      id="header"
      className="grid grid-cols-4 lg:grid-cols-12 items-center justify-items-end pt-6"
    >
      <nav className="text-l font-light col-start-7 col-end-12 blured-2 hidden lg:flex nav-text">
        <ul className={`${verticalNav ? "vert-nav-container" : ""}`}>
          {header.map((link) => (
            <li className={getClassNames(link)} key={link.id}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleToggleTheme}
        className="container lg:col-start-12 mr-9 blured-2"
        aria-label="Toggle color mode"
        title="Toggle color mode"
      >
        <div className={`sun ${theme === "light" && "visible"} `}></div>
        <div className={`moon ${theme === "dark" && "visible"} `}>
          <div className="star"></div>
          <div className="star small"></div>
        </div>
      </button>
    </div>
  );
}
