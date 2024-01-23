import { useState } from "react";

import "./header.css";

export default function Header() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div id="header" className="grid grid-cols-12 items-center my-5">
      <div className="text-slate-400 text-xl font-light col-start-6 ">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="/footer">Contacts</a>
          </li>
        </ul>
      </div>
      <button
        onClick={toggleTheme}
        className="container col-start-11"
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
