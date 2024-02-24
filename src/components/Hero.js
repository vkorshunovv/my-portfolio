import me from "../assets/hero/IMG_5160.jpg";
import cropped from "../assets/hero/IMG_5160_cropped.png";
import me2 from "../assets/hero/6.png";
import img1 from "../assets/hero/output-onlinepngtools.png";
import img2 from "../assets/hero/output-onlinepngtools (1).png";
import img3 from "../assets/hero/1v3.png";
import "../components/Hero.css";

export default function Hero() {

  return (
    <div className="min-h-screen grid grid-cols-12 items-center">
      <div className="col-start-1 col-end-5 space-y-20 ml-5 ">
        <h1 className="text-slate-100 text-9xl mt-22 font-extrabold">
          Greetings<span className="text-red-500 ">.</span>
        </h1>
        <h2 className="text-slate-100 text-8xl ">
          I'm a{" "}
          <span className="font-extrabold">
            FRONT-END DEVELOPER<span className="text-teal-500">.</span>
          </span>
        </h2>
      </div>
      <div className="col-start-7 col-end-12 ">
        <img src={img2} className=" opacity-75" alt="My portrait" />
      </div>
    </div>
  );
}
