import instagram from "../assets/footer/instagram.png";
import facebook from "../assets/footer/facebook.png";
import telegram from "../assets/footer/telegram.png";
import linkedin from "../assets/footer/linkedin.png";
import github from "../assets/footer/github-light.svg";

// import instagramDark from "../assets/footer/instagramDark.png";
// import facebookDark from "../assets/footer/facebookDark.png";
// import telegramDark from "../assets/footer/telegramDark.png";
// import linkedinDark from "../assets/footer/linkedinDark.png";
// import githubDark from "../assets/footer/githubDark.png";

import "./footer.css";

export default function Footer({ isDarkMode, toggleTheme }) {
  return (
    <div
      id="footer"
      className={`min-h-36 ${
        isDarkMode
          ? "from-slate-950 to-slate-900 bg-gradient-to-b"
          : "bg-gradient-to-t "
      }`}
    >
      <div className="flex w-full grid grid-cols-12 items-center">
        <section className="col-start-2 col-end-5 flex justify-start mt-24 mb-4 gap-2 ">
          <a
            href="https://www.instagram.com/vkorshunovv"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={instagram}
              alt="Instagram"
              className={`size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 ${
                isDarkMode ? "" : "invert"
              }`}
            />
          </a>
          <a
            href="https://www.facebook.com/victor.korshunow"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={facebook}
              alt="facebook"
              className={`size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 ${
                isDarkMode ? "" : "invert"
              }`}
            />
          </a>
          <a
            href="https://t.me/korshunow"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={telegram}
              alt="Telegram"
              className={`size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 ${
                isDarkMode ? "" : "invert"
              }`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/viktor-korshunov-6379b6282/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className={`size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 ${
                isDarkMode ? "" : "invert"
              }`}
            />
          </a>
          <a
            href="https://github.com/vkorshunovv"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={github}
              alt="GitHub"
              className={`size-8 mx-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 ${
                isDarkMode ? "" : "invert"
              }`}
            />
          </a>
        </section>
        <section
          className={`${
            isDarkMode ? "text-slate-100" : "text-slate-800"
          } mt-24 flex col-start-5 col-end-9 justify-end`}
        >
          <p>
            &#169; 2024 | Designed & Developed{" "}
            <span className="text-red-500">*with love*</span> by
            <span className="font-semibold"> Viktor Korshunov</span>
          </p>
        </section>
        <section className=" mt-24 mb-4 flex col-start-9 col-end-12 justify-end">
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
        </section>
      </div>
    </div>
  );
}
