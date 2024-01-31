import { useState } from "react";

import instagram from "../assets/footer/instagram.png";
import facebook from "../assets/footer/facebook.png";
import telegram from "../assets/footer/telegram.png";
import linkedin from "../assets/footer/linkedin.png";
import github from "../assets/footer/github-light.svg";
import "./footer.css";

export default function Footer() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
      id="footer"
      className="min-h-36 bg-gradient-to-b from-slate-950 from-10 to-gray-800  "
    >
      <div className="flex items-end w-full ">
        <section className="w-1/3 flex justify-center mt-24 mb-4 gap-2 ">
          <a href="https://www.instagram.com/vkorshunovv" target="_blank">
            <img src={instagram} className="size-8 mx-2" />
          </a>
          <a href="https://www.facebook.com/victor.korshunow" target="_blank">
            <img src={facebook} className="size-8 mx-2" />
          </a>
          <a href="https://t.me/korshunow" target="_blank">
            <img src={telegram} className="size-8 mx-2" />
          </a>
          <a href="https://www.linkedin.com/in/viktor-korshunov-6379b6282/" target="_blank">
            <img src={linkedin} className="size-8 mx-2" />
          </a>
          <a href="https://github.com/vkorshunovv" target="_blank">
            <img src={github} className="size-8 mx-2" />
          </a>
        </section>
        <section className="w-1/3 mt-24 mb-4 flex justify-center">
          <p>
            &#169; 2024 | Designed & Developed by
            <span className="font-bold"> Viktor Korshunov</span>
          </p>
        </section>
        <section className="w-1/3 mt-24 mb-4 flex justify-center">
          <button
            onClick={toggleTheme}
            className="container"
            aria-label="Toggle color mode"
            title="Toggle color mode"
          >
            <div className={`sun ${!theme ? "visible" : null}`}></div>
            <div className={`moon ${theme ? "visible" : null}`}>
              <div className="star"></div>
              <div className="star small"></div>
            </div>
          </button>
        </section>
      </div>
    </div>
  );
}
