import instagram from "../../assets/footer/instagram.png";
import facebook from "../../assets/footer/facebook.png";
import telegram from "../../assets/footer/telegram.png";
import linkedin from "../../assets/footer/linkedin.png";
import github from "../../assets/footer/github-light.svg";
import arrow from "../../assets/footer/arrow-to-top.png";
import React from "react";

export default function Footer({ isDarkMode, toggleTheme }) {
  const links = [
    {
      url: "https://www.instagram.com/vkorshunovv",
      src: instagram,
      title: "Instagram",
      id: 1,
    },
    {
      url: "https://www.facebook.com/victor.korshunow",
      src: facebook,
      title: "Facebook",
      id: 2,
    },
    {
      url: "https://t.me/korshunow",
      src: telegram,
      title: "Telegram",
      id: 3,
    },
    {
      url: "https://www.linkedin.com/in/viktor-korshunow",
      src: linkedin,
      title: "Linkedin",
      id: 4,
    },
    {
      url: "https://github.com/vkorshunovv",
      src: github,
      title: "GitHub",
      id: 5,
    },
  ];
  return (
    <div
      id="footer"
      className={`min-h-36 ${
        isDarkMode
          ? "from-slate-950 to-slate-900 bg-gradient-to-b"
          : "bg-gradient-to-t"
      }`}
    >
      <div className="w-full grid grid-cols-4 lg:grid-cols-12 items-center">
        <section className="col-start-1 lg:col-start-2 col-end-5 flex space-x-1 lg:space-x-0 justify-start mt-24 mb-4 gap-2 mx-5 lg:mx-0">
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              key={link.id}
            >
              <img
                src={link.src}
                alt={link.title}
                className={`size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 ${
                  isDarkMode ? "" : "invert"
                }`}
              />
            </a>
          ))}
        </section>
        <section
          className={`${
            isDarkMode ? "text-slate-100" : "text-slate-800"
          } mt-8 lg:mt-24 flex col-start-1 lg:col-start-5 col-end-5 lg:col-end-10 justify-start lg:justify-center mx-5 lg:mx-0 text-sm lg:text-md`}
        >
          <p className="pl-2 lg:pl-0 flex block flex-col lg:flex-row justify-start">
            &#169; 2024 | Designed & Developed
            <span className="text-red-500 hidden lg:block lg:px-1">
              {" "}
              *with love*
            </span>{" "}
            by
            <span className="font-semibold lg:pl-1"> Viktor Korshunov</span>
          </p>
        </section>
        <section className=" mt-8 lg:mt-24 mb-4 flex col-start-1 lg:col-start-10 col-end-5 lg:col-end-12 justify-between lg:justify-end items-start mx-5 lg:mx-0">
          <button
            onClick={toggleTheme}
            className="container"
            aria-label="Toggle color mode"
            title="Toggle color mode"
          >
            <div className={`sun ${!isDarkMode ? "visible" : null}`}></div>
            <div className={`moon ${isDarkMode ? "visible" : null}`}>
              <div className="star"></div>
              <div className="star small"></div>
            </div>
          </button>
          <div
            className={`lg:hidden mr-3 size-5 ${isDarkMode ? "invert" : ""} `}
          >
            <a href="#header">
              <img src={arrow} alt="Arrow to top" />
            </a>
          </div>
        </section>
        <section className=" lg:hidden flex col-start-1 col-end-5 justify-end px-6 pb-4 "></section>
      </div>
    </div>
  );
}
