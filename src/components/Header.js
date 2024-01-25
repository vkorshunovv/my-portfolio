import { useState } from "react";

import "./header.css";

export default function Header() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div id="header" className="grid grid-cols-12 items-center justify-items-end my-5">
      <div className="text-slate-400 text-l font-light col-start-7 col-end-11">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#footer">Contacts</a>
          </li>
        </ul>
      </div>
      <button
        onClick={toggleTheme}
        className="container col-start-11 mr-9"
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
