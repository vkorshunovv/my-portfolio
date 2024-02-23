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
      className="min-h-36 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="flex w-full grid grid-cols-12 items-center">
        <section className="col-start-2 col-end-5 flex justify-start mt-24 mb-4 gap-2 ">
          <a href="https://www.instagram.com/vkorshunovv" target="_blank">
            <img
              src={instagram}
              className="size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
            />
          </a>
          <a href="https://www.facebook.com/victor.korshunow" target="_blank">
            <img
              src={facebook}
              className="size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
            />
          </a>
          <a href="https://t.me/korshunow" target="_blank">
            <img
              src={telegram}
              className="size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/viktor-korshunov-6379b6282/"
            target="_blank"
          >
            <img
              src={linkedin}
              className="size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
            />
          </a>
          <a href="https://github.com/vkorshunovv" target="_blank">
            <img
              src={github}
              className="size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
            />
          </a>
        </section>
        <section className=" mt-24 mb-4 flex col-start-5 col-end-9 justify-end">
          <p>
            &#169; 2024 | Designed & Developed by
            <span className="font-bold"> Viktor Korshunov</span>
          </p>
        </section>
        <section className=" mt-24 mb-4 flex col-start-9 col-end-12 justify-end">
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
