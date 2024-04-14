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
                2022-2023
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
            Before I delved into the world of web development, I worked in the
            theater field. This experience gave me a great understanding of
            working in a large team, where each person is responsible for their
            part of the process, and everyone together creates a great result.
            This taught me to better understand people and see the world in all
            its manifestations.
          </p>
          <p className="my-3 ">
            Since childhood, I have also been interested in gadgets and
            technology, reading a huge number of magazines about the latest
            technological innovations and spending a lot of time on the
            computer, exploring its capabilities. When I first tried HTML, it
            was like love at first sight. CSS has finally won me over{" "}
            <span role="img" aria-label="Bomb">
              &#129512;
            </span>
            . The ability to instantly see the result of your work opens up the
            potential for limitless creativity and imagination.
          </p>
          <p className="mt-3 ">
            Outside work or study, I enjoy walking at the park, listening to
            music/podcasts, exploring the world with my wife, and taking
            pictures with my phone
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
