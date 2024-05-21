import rightPic from "../assets/IMG_7623.png";
import leftPic from "../assets/IMG_4479.png";
import rightPicLight from "../assets/IMG_7173.png";
import leftPicLight from "../assets/IMG_2706.png";
import "./about.css";
import React from "react";

export default function About({ isDarkMode }) {
  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  return (
    <div
      id="about"
      className={`min-h-screen flex flex-col lg:grid-cols-12 bg-gradient-to-t ${
        isDarkMode ? "from-slate-950" : ""
      }`}
    >
      <section className="lg:grid lg:grid-cols-12 lg:col-start-1 lg: col-end-13 lg:row-start-1">
        <article className="w-full lg: col-start-1 lg:col-end-7 p-5 pt-12 items-end reveal fade-left h-fit">
          <div className="flex flex-col lg:items-end gap-4">
            <div
              className={`flex flex-col lg:w-11/12 rounded-2xl p-2 ${
                isDarkMode ? "bg-green-900" : "bg-green-300/60"
              }`}
            >
              <span
                className={`${
                  isDarkMode
                    ? "bg-teal-400/10 text-slate-100/60"
                    : "bg-green-600/10 text-slate-600"
                } rounded-2xl py-1 px-2 font-normal `}
              >
                2023-currently
              </span>
              <span
                className={`font-medium px-2 ${
                  isDarkMode ? "text-slate-100" : "text-slate-950"
                }`}
              >
                Guauleria Frontend developer
              </span>
            </div>
            <div
              className={`flex flex-col lg:w-9/12 rounded-2xl p-2 ${
                isDarkMode ? "bg-green-900" : "bg-green-400/60"
              }`}
            >
              <span
                className={`${
                  isDarkMode
                    ? "bg-teal-400/10 text-slate-100/60"
                    : "bg-green-700/10 text-slate-600"
                } rounded-2xl py-1 px-2 font-normal `}
              >
                2020-2022
              </span>
              <span
                className={`font-medium px-2 ${
                  isDarkMode ? "text-slate-100" : "text-salte-950"
                }`}
              >
                Tinkoff Bank sales employee
              </span>
            </div>

            <div
              className={`flex flex-col lg:w-6/12 rounded-2xl p-2 ${
                isDarkMode ? "bg-green-900" : "bg-green-500/60"
              }`}
            >
              <span
                className={`${
                  isDarkMode
                    ? "bg-teal-400/10 text-slate-100/60"
                    : "bg-green-800/10 text-slate-600"
                } rounded-2xl py-1 px-2 font-normal `}
              >
                2016-2020
              </span>
              <span
                className={`font-medium px-2 ${
                  isDarkMode ? "text-slate-100" : "text-slate-950"
                }`}
              >
                Kyiv Academic Lypky Theatre actor
              </span>
            </div>
          </div>
        </article>
        <article
          className={`flex flex-wrap h-min justify-center text-xl col-start-1 lg:col-start-7 col-end-5 lg:col-end-12 font-light lg:font-medium justify-between text-pretty mb-12 bg-gradient-to-t rounded-br-2xl rounded-bl-2xl opacity-70 p-6 lg:mt-4 reveal fade-bottom shadow-4xl ${
            isDarkMode
              ? "text-slate-100 from-green-900"
              : "text-slate-800 from-green-100"
          } `}
        >
          <p className="mb-3 pt-4">
            Before getting into web development, I worked in theater. That
            taught me a lot about teamwork and how important everyone's role is
            in creating a collaborative project. It also helped me understand
            people better and see different sides of life.
          </p>
          <p className="my-3 ">
            I've loved gadgets and technology since I was a kid. I spent hours
            reading tech magazines and exploring computers. The first time I
            tried HTML, CSS and JavaScript I was hooked. React won me over even
            more{" "}
            <span role="img" aria-label="Bomb">
              &#129512;
            </span>{" "}
            The ability to see my work come to life instantly gives me passion
            to go forward.
          </p>
          <p className="mt-3 ">
            Outside of work and study, I enjoy taking walks in the park,
            listening to music and podcasts, exploring new places around the
            world with my wife, and capturing moments with my phone
            <span className="text-teal-500"> &#8595;</span>
          </p>
        </article>
      </section>
      <article className="block lg:flex justify-center content-center lg-row-start-2 col-start-1 lg:col-start-2 col-end-5 lg:col-end-12 mb-12 lg:px-[7.5rem]">
        <figure className="aboutContainer lg:basis-2/3 bg-grey-100 lg:mr-6 p-3 lg:p-0 flex items-stretch reveal fade-bottom">
          <img
            className="rounded-2xl shadow-xl"
            src={isDarkMode ? leftPic : leftPicLight}
            alt="first travel card"
          />
          <figcaption className="rounded-xl text-slate-100 font-medium text-md flex justify-end flex-col place-items-center">
            <p className="p-3">{`${
              isDarkMode ? "Bruges, Belgium" : "Palermo, Italy"
            }`}</p>
          </figcaption>
        </figure>
        <figure className="aboutContainer lg:basis-1/3 bg-grey-400 p-3 lg:p-0 flex items-stretch reveal fade-bottom">
          <img
            className="rounded-xl shadow-xl"
            src={isDarkMode ? rightPic : rightPicLight}
            alt="second travel card"
          />
          <figcaption className="rounded-xl text-slate-100 font-medium text-md flex justify-end flex-col place-items-center">
            <p className="p-3">{`${
              isDarkMode ? "Rabat, Morocco" : "Cappadocia, Türkiye"
            }`}</p>
          </figcaption>
        </figure>
      </article>
    </div>
  );
}
