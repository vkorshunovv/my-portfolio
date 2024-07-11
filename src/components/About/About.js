import rightPic from "../../assets/about/IMG_7623.png";
import leftPic from "../../assets/about/IMG_4479.png";
import rightPicLight from "../../assets/about/IMG_7173.png";
import leftPicLight from "../../assets/about/IMG_2706.png";
import "./about.css";
import React from "react";

export default function About({ isDarkMode }) {
  window.addEventListener("scroll", reveal);

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

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
        <article
          className={`flex flex-wrap h-min justify-center text-xl col-start-1 lg:col-start-7 col-end-5 lg:col-end-12 font-light lg:font-medium justify-between text-pretty mb-12 bg-gradient-to-t rounded-br-2xl rounded-bl-2xl opacity-70 p-6 lg:mt-4 reveal fade-bottom shadow-4xl ${
            isDarkMode
              ? "text-slate-100 from-green-900"
              : "text-slate-800 from-green-100"
          } `}
        >
          <p className="mb-3 pt-4">
            Yes, I might not know everything (let's be honest, does anyone?),
            but the most important skill I have acquired in my entire life is
            the ability to learn and never stop improving.
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
            loading="lazy"
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
            loading="lazy"
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
