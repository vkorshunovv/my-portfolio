import me from "../assets/hero/IMG_5160.jpg";
import cropped from "../assets/hero/IMG_5160_cropped.png";
import me2 from "../assets/hero/IMG_1934.png"
import img1 from "../assets/hero/1v1.png"
import img2 from "../assets/hero/1v2.png"
import img3 from "../assets/hero/1v2_copy.png"

export default function Hero() {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-start-1 col-end-5 space-y-20">
        <h1 className="text-slate-100 text-9xl mt-24 ml-5 font-extrabold">
          Greetings<span className="text-red-500 ">.</span>
        </h1>
        <h2 className="text-slate-100 text-8xl ml-5">
          I'm a{" "}
          <span className="font-extrabold">
            FRONT-END DEVELOPER<span className="text-teal-500">.</span>
          </span>
        </h2>
      </div>
      <div className="col-start-8 col-end-13 relative">
        {/* <img src={img2} className="opacity-1 absolute " alt="My portrait" /> */}
        <img src={img2} className="absolute opacity-70" alt="My portrait cropped" />
      </div>
    </div>
  );
}
