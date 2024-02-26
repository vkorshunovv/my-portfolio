import { useEffect } from "react";
import me from "../assets/hero/output-onlinepngtools (1).png";
import "../components/Hero.css";

export default function Hero() {
  useEffect(() => {
    const onPageLoad = () => {
      console.log("page loaded");
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-12 items-center">
      <div
        id="hero"
        className="col-start-1 col-end-5 space-y-20 ml-5 blured-3 "
      >
        <h1 className="text-slate-100 text-9xl mt-22 font-extrabold">
          Greetings<span className="text-red-500 ">.</span>
        </h1>
        <h2 className="text-slate-100 text-8xl ">
          I'm a{" "}
          <span className="font-extrabold uppercase">
            front-end developer<span className="text-teal-500">.</span>
          </span>
        </h2>
      </div>
      <div className="col-start-7 col-end-12 blured-3">
        <img src={me} className=" opacity-75" alt="My portrait" />
      </div>
    </div>
  );
}
