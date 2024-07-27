import me from "../../assets/hero/myPhoto.png";
import meLight from "../../assets/hero/myPhotoLight.png";
import "./hero.css";
import theme from "../../App";

export default function Hero() {
  return (
    <div className="h-min-screen grid grid-cols-4 lg:grid-cols-12 lg:items-center">
      <div
        id="hero"
        className="col-start-1 col-end-5 lg:col-end-7 lg:space-y-20 ml-5 pt-10 lg:pt-0 pr-3 lg:pr-0 blured-hero"
      >
        <h1 className="hero-title text-6xl lg:text-9xl font-extrabold">
          Greetings
          <span className="red-point text-6xl lg:text-9xl">.</span>
        </h1>
        <h2 className="hero-title lg:w-4/6 pt-5 text-5xl lg:text-8xl">
          <div className="flex">I'm a</div>
          <div className="font-extrabold uppercase block">
            {""} front-end{" "}
            <div>
              developer
              <span className="green-point text-6xl lg:text-8xl">.</span>
            </div>
          </div>
        </h2>
      </div>
      <div className="col-start-1 lg:col-start-7 col-end-5 lg:col-end-12 blured-hero">
        <img
          src={theme === "dark" ? me : meLight}
          className="hero-opacity"
          alt="my portrait"
        />
      </div>
    </div>
  );
}
